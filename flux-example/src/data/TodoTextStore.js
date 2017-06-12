import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoTextStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        return '';

      case TodoActionTypes.UPDATE_TEXT:
        return action.text;

      default:
        return state;
    }
  }
}

export default new TodoTextStore();
