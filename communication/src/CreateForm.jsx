import React from 'react';
import TodoList from './TodoList';

export default class Home extends React.Component {
  render() {
    const { submit, text, updateText } = this.props;
    return (
      <form onSubmit={submit}>
        <div className="row">
          <div className="ten columns">
            <label htmlFor="new-todo">Ingrese una tarea</label>
            <input
              type="text"
              id="new-todo"
              placeholder="Hacer compra del mercado"
              className="u-full-width"
              value={text}
              onChange={updateText}
            />
          </div>
          <div className="two columns">
            <button
              className="button-primary"
              type="submit"
              value="submit"
            >Crear</button>
          </div>
        </div>
      </form>
    )
  }
}
