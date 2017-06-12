import React from 'react';
import Item from './Item';

export default function TodoList(props) {
  const { items } = props;
  return (
    <div>
      {
        items.map(item => (
          <Item
            key={item.id}
            onCompleteTodo={props.onCompleteTodo}
            {...item}
          />
        ))
      }
    </div>
  );
};
