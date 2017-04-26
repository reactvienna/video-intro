import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <Router>
    <span>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={App} />
    </span>
  </Router>,
  document.getElementById('root')
);
