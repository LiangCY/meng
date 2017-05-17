import React, {Component, PropTypes} from 'react';

export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button>
        {this.props.children}
      </button>
    );
  }
}
