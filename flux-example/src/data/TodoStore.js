import { ReduceStore } from 'flux/utils';
import Todo from './Todo';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return [];
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        const id = state.length + 1;
        state.push(new Todo(id, action.text)); // ?
        return state;

      case TodoActionTypes.COMPLETE_TODO:
        state = state.map(item => {
          if(item.id !== action.id) {
            return item;
          }
          return {
            id: item.id,
            text: item.text,
            done: true
          }
        });
        return state;

      default:
        return state;
    }
  }
}

export default new TodoStore();
