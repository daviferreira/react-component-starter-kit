'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import YourComponent from '../src/YourComponent';

class Demo extends React.Component {

  render() {
    return (
      <YourComponent />
    );
  }

}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
