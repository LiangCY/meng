import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'meng';


const App = () => (
  <div>
    <h1>Examples</h1>
    <h2>Button</h2>
    <Button>Button</Button>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('react'));
