import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text
    });
  },
  updateText(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.UPDATE_TEXT,
      text
    });
  },
  completeTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.COMPLETE_TODO,
      id
    });
  }
};

export default Actions;
