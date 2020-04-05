import React from "react";
import Counter from "./counter";
class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          >
            {/* // passing Childrens ,passing some dialogue box , you should change the self-closed component tags into 2 tags, and put the dialogue box in between */}
            <h4>Product #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
