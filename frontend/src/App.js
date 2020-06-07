import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import BusinessList from './page/BusinessList';
import Home from './page/Home'

import './App.css';


const styles = {
   container: {
      width: '100%',
      maxWidth: '1170px',
      margin: '0 auto'
   },
   row: { 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
   }
}


function App() {
   return (
      <Router>
         <div className="App">
            <header className="App-header">
               <div className="container" style={styles.container}>
                  <div className="row justify-content-between" style={styles.row}>
                     <Link to="/"><h2>Blisting</h2></Link>
                     <Link to='/list'>Business List</Link>
                  </div>
               </div>
            </header>
            <Switch>
               <Route path='/list' component={BusinessList} />
               <Route path="/" exact component={Home} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
