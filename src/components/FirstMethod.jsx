import { createElement } from 'react';

function FirstMethod() {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello World'
  );
}

export default FirstMethod;
