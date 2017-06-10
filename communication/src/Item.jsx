import React from 'react';

class Item extends React.Component {
  render() {
    const { text, finish, status } = this.props;
    return (
      <div className={"row item " + (status !== "done" ? "open" : "closed")}>
        <div className="six columns description">
          <div className="">{text}</div>
        </div>
        <div className="six columns actions">
          <button
            onClick={finish}
            className="button-primary"
            disabled={status === "done"}
          >Terminar</button>
        </div>
      </div>
    );
  }
}

export default Item;
