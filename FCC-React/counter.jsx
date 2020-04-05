import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: []
  };

  render() {
    //to check|learn how props was passed in

    // console.log("props:", this.props.value);
    // console.log("ondelete", this.props.onDelete);

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm "
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    return (
      this.state.tags.length !== 0 && (
        <ul>
          {this.state.tags.map(e => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
