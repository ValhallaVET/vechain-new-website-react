import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import WebFont from 'webfontloader';
import 'sanitize.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: [
      'Lato:400,700',
      'Oleo Script Swash Caps'
    ],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
