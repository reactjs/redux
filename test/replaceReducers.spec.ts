import { createStore, combineReducers, AnyAction, Reducer, CombinedState, Store } from '..'

describe('replaceReducers test', () => {
  it('replaces the reducer', () => {
    const nextReducer = combineReducers({
      foo: (state = 1, _action) => state,
      bar: (state = 2, _action) => state
    })
    const store = createStore((state: AnyAction | undefined, action) => {
      if (state === undefined) return { type: 5 }
      return action
    })

    store.dispatch({ type: 'INIT' });
    expect(store.getState().type).toBe(5);

    store.replaceReducer(nextReducer as unknown as Reducer<AnyAction>)
    const nextStore = store as unknown as Store<CombinedState<{ foo: unknown; bar: unknown; }>>;

    expect(nextStore.getState().foo).toBe(1)
    expect(nextStore.getState().bar).toBe(2)
  })
})
