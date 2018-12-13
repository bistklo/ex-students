import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import App from '/app/App.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import  '/app/App.css';

configure({
  enforceActions: 'always'
});

ReactDOM.render(<App />, document.getElementById('root'));
