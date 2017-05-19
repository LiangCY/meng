import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '../src';

import './style/style.less'

const App = () => (
  <div>
    <h1>Examples</h1>
    <h2>Button</h2>
    <div id="buttons">
      <div className="item">
        <Button>Button</Button>
      </div>
      <div className="item">
        <Button primary>Button</Button>
      </div>
      <div className="item">
        <Button disabled>Button</Button>
      </div>
      <div className="item">
        <Button primary disabled>Button</Button>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('react'));
