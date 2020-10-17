import React, { useState } from 'react';
import './Counter.css';

/* export default class Counter extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <p>Has realizado {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click!
        </button>
      </div>
    );
  }
} */

export default function Counter() {
  let [count, setState] = useState(0);
  return (
    <div className='counter-container'>
      <h2>Counter</h2>
      <p>Has realizado from hooks {count}</p>

      <button className='btn btn-success' onClick={() => setState(count + 1)}>
        Click!
      </button>
    </div>
  );
}
