import React from 'react';
import Header from "./components/Header"
import "./App.css"
import Template from "./components/Template"
import Mainbody from './components/Mainbody'
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom"
import Formheader from './components/Formheader';
import Centeredtabs from './components/Tabs';
import Questionform from './components/Question_form';


function App() {
  return (
    <div className="app">
            <Router>
              <Switch>
              <Route path="/form/:id">
                  <Formheader />
                  <Centeredtabs />
                  <Questionform />
                </Route>
                <Route path="/">
                  <Header />
                  <Template/>
                  <Mainbody/>
                </Route>
              </Switch>
            </Router>
    </div>
  );
}

export default App;
