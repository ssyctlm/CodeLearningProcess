import React from "react";
import Counters from "./counters";

class Top extends React.Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 3 },
      { id: 5, value: 66 }
    ]
  };
  handleDelete = counterId => {
    // console.log("event handler called", counterId);
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(ct => {
      ct.value = 0;
      return ct;
    });
    this.setState({
      counters: counters
    });
  };
  handleIncrement = counter => {
    // console.log("clicked", counter); //debug
    // console.log(productId);
    const counters = this.state.counters.slice();
    const idx = counters.indexOf(counter);
    counters[idx].value = counters[idx].value += 1;
    this.setState({ counters: counters });
  };
  handleDecrement = counter => {
    const counters = this.state.counters.slice();
    const idx = counters.indexOf(counter);
    counters[idx].value > 0
      ? (counters[idx].value -= 1)
      : (counters[idx].value = 0);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="..index">
            Navbar{" "}
            <span className="badge badge-pill badge-info">
              Type:
              {this.state.counters.length ? this.state.counters.length : 0}
            </span>
            <span className="badge badge-pill badge-primary m-2">
              Total:
              {this.state.counters.reduce((a, ele) => a + ele.value, 0)}
            </span>
          </a>
        </nav>
        <div className="container">
          <Counters
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Top;
