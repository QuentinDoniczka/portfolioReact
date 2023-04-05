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
  const { Biography, MyCv, Projet, ProjectDetails} = Pages;
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Main projects={projects} />} />
          <Route exact path="/Biography" component={Biography} />
          <Route exact path="/MyCv" component={MyCv} />
          <Route exact path="/Projet" render={() => <Projet projects={projects} />} />
          <Route path="/Projet/:id" render={(props) => <ProjectDetails {...props} projects={projects} />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;