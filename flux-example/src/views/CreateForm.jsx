import React from 'react';

export default function CreateForm(props) {
  const { onAdd, text, onUpdateText } = props;
  const onChange = (event) => onUpdateText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    return onAdd(text);
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="ten columns">
          <label htmlFor="new-todo">Ingrese una tarea</label>
          <input
            type="text"
            id="new-todo"
            placeholder="Hacer compra del mercado"
            className="u-full-width"
            value={text}
            onChange={onChange}
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
