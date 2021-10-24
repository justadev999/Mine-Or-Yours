import React from "react";
import GlobalStyle from './CSS_Main'
import MainLoginComponent from './components/LoginPage/MainLoginCmp'
import GameCmp from './components/GamePage/GameCmp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  

  return (
    <>
    <GlobalStyle/>
    <Router>

      <Switch>
    <Route exact path='/'>
    <MainLoginComponent  />
    </Route>

    <Route path='/game'>
    <GameCmp />
    </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
