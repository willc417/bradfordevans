import React from 'react';
import ReactDOM from 'react-dom';
import Music from '../Components/Music';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Music />, div);
  ReactDOM.unmountComponentAtNode(div);
});
