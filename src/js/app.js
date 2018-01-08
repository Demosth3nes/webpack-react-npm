import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../scss/index.scss';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from reacts
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
