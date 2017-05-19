import React, {Component, PropTypes} from 'react';
import buttonStyle from '../styles/button';

const buttonPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  style: PropTypes.object,
  hoverStyle: PropTypes.object,
  disabledStyle: PropTypes.object,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    const {
      children,
      disabled, primary,
      style, hoverStyle, disabledStyle,
      onMouseEnter, onMouseLeave,
      ...otherProps
    } = this.props;
    const baseStyle = primary ? buttonStyle.primaryStyle : buttonStyle.style;
    let combinedStyle = {
      ...baseStyle,
      ...style,
    };

    if (disabled) {
      const baseDisabledStyle = primary ? buttonStyle.primaryDisabledStyle : buttonStyle.disabledStyle;
      combinedStyle = {
        ...combinedStyle,
        ...baseDisabledStyle,
        ...disabledStyle,
      };
    } else {
      if (this.state.isHovered) {
        const baseHoverStyle = primary ? buttonStyle.primaryHoverStyle : buttonStyle.hoverStyle;
        combinedStyle = {
          ...combinedStyle,
          ...baseHoverStyle,
          ...hoverStyle,
        };
      }
    }

    return (
      <button
        style={combinedStyle}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        disabled={disabled}
        {...otherProps}>
        {children}
      </button>
    );
  }
}
