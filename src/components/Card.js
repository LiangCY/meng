import React, {Component, PropTypes} from 'react';
import cardStyle from '../styles/card';

const cardPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.object
};

export default class Card extends Component {

  constructor(props) {
    super(props);
  }

  static displayName = 'Card';

  static propTypes = cardPropTypes;

  render() {
    const {style, children, ...otherProps} = this.props;
    const combinedStyle = {...cardStyle.style, ...style};
    return (
      <div {...otherProps} style={combinedStyle}>
        {children}
      </div>
    );
  }
}
