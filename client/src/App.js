import React from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import projects from './projects.json'; // Import the JSON file


function App() {
  const { Biography, MyCv, Projet } = Pages;
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Main projects={projects} />} />
          <Route path="/Biography" component={Biography} />
          <Route path="/MyCv" component={MyCv} />
          <Route path="/Projet" component={Projet} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;