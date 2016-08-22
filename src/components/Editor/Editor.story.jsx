import React from 'react';
import storiesOf from '../../utils/storiesOf.js';
import Editor from '.';

storiesOf('Editor')
  .addWithInfo('Default without props', () => (
    <Editor />
  ))
  .addWithInfo('Default with children', () => (
    <Editor>Editor</Editor>
  ))
  .addWithInfo('Default with Hello word', () => (
    <Editor>Hello</Editor>
  ));

