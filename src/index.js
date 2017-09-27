import React from 'react';
import {render} from 'react-dom';

const title= React.createElement (
  'h1',
  {id: 'title', className: 'header'},
  'hello world!'
)

render (
  title,
  document.getElementById('react-container')
)
