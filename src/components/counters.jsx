import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
