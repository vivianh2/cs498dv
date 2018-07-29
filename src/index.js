import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/lib/material-design-icons/css/material-design-iconic-font.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
