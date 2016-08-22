import React from 'react';
import { shallow } from 'enzyme';
import Editor from '.';

describe('@component Editor', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Editor />)).to.have.length(1);
  });
  it('should render normal with children content', () => {
    expect(shallow(<Editor>Editor</Editor>)).to.have.length(1);
  });
});

