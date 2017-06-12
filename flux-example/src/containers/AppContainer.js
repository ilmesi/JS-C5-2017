import { Container } from 'flux/utils';
import AppView from '../views/AppView';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';
import TodoTextStore from '../data/TodoTextStore';


function getStores() {
  return [
    TodoTextStore,
    TodoStore
  ];
}

function getState() {
  return {
    text: TodoTextStore.getState(),
    items: TodoStore.getState(),

    onAdd: TodoActions.addTodo,
    onUpdateText: TodoActions.updateText,
    onCompleteTodo: TodoActions.completeTodo
  };
}

export default Container.createFunctional(AppView, getStores, getState);
