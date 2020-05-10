import { CombinedState, combineReducers, createStore, Reducer, Store } from '../..'

/**
 * verify that replaceReducer maintains strict typing if the new types change
 */
const bar = (state = { value: 'bar' }) => state
const baz = (state = { value: 'baz' }) => state
const ACTION = {
  type: 'action'
}

const originalCompositeReducer = combineReducers({ bar })
const store = createStore(originalCompositeReducer)
store.dispatch(ACTION)

const firstState = store.getState()
firstState.bar.value
// typings:expect-error
firstState.baz.value

store.replaceReducer(combineReducers({ baz }) as unknown as Reducer<CombinedState<{ bar: { value: string } }>>) // returns ->  { baz: { value: 'baz' }}
const nextStore = store as unknown as Store<CombinedState<{ baz: { value: string } }>>

const nextState = nextStore.getState()
// typings:expect-error
nextState.bar.value
nextState.baz.value
