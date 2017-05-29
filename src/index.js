import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import fakeData from './fake-data'
/**
 * Try to handle data first
 */
console.log(fakeData)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
