import { store } from '../reducers'

let nextTodoId = 0

export default class Actions {
  constructor(store) {
    this._store = store
  }

  addTodo(text) {
    this._store.dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    })
  }

  setVisibilityFilter(filter) {
    this._store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    })
  }

  toggleTodo(id) {
    this._store.dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
}

export const actions = new Actions(store)
