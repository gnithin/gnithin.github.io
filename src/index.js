import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Bio from './bio';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Bio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
