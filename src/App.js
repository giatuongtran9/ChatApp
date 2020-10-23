import React from 'react';
import './App.css';

import { HashRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import ChatRoom from './components/ChatRoom/ChatRoom'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId/:name" component={ChatRoom} />
      </Switch>
    </HashRouter>
  );
}

export default App;
