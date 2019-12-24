import React from 'react';
import ReactDOM from 'react-dom';
import Video from '../Components/Video';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Video />, div);
  ReactDOM.unmountComponentAtNode(div);
});
