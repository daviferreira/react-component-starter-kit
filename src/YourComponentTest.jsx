'use strict';

import expect from 'unexpected';
import jsdom from 'mocha-jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import YourComponent from './YourComponent';

describe('Your Component Test Case', () => {

  jsdom();

  it('should render', () => {
    var instance = TestUtils.renderIntoDocument(<YourComponent />);
    expect(instance, 'to be defined');
  });

});
