// Import npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

// Import components
import App from './App.jsx';
import Game from './Game.jsx'

const Routing = () => {
    return (
      <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/game" component={Game} />
      </BrowserRouter>
    );
  }

ReactDOM.render(<Routing />, document.getElementById('root'));