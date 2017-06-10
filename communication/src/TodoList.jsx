import React from 'react';

import Item from './Item';

class TodoList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {
          items.map(item => (
            <Item key={item.id} {...item} />
          ))
        }
      </div>
    );
  }
}

export default TodoList;
