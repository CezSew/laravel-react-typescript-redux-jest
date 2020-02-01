import React from 'react';
import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from './Button';

configure({adapter: new Adapter()});

test('Button displays', () => {
  const button = shallow(
    <Button buttonText="Text" classList="o-button" />,
  );
  expect(button.text()).toEqual('Text');
});