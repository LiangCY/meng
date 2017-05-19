import React, {Component, PropTypes} from 'react';
import buttonStyle from '../styles/button';

const buttonPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  focusStyle: PropTypes.object,
  hoverStyle: PropTypes.object,
  disabledStyle: PropTypes.object,
  disabledHoverStyle: PropTypes.object,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  primary: PropTypes.bool,
};

export default class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      isHovered: false
    };
  }

  static displayName = 'Button';

  static propTypes = buttonPropTypes;

  static defaultProps = {
    primary: false,
    disabled: false
  };

  _onMouseEnter = (event) => {
    this.setState({
      isHovered: true
    });

    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };


  _onMouseLeave = (event) => {
    this.setState({
      isHovered: false,
    });

    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  _onMouseDown = (event) => {
    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }
  };

  render() {
    return (
      <button
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        onMouseDown={this._onMouseDown }
        disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}
