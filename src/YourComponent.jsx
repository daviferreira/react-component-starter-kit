import React, { Component, PropTypes } from 'react';

export default class YourComponent extends Component {
  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="your-component">
        Hello, world!
      </div>
    );
  }

}
