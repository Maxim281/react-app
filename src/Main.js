import React, {Component} from 'react';
import {Route, HashRouter } from 'react-router-dom';
import './style.css';
import Header from './Header';
import Home from './Home';
import Articles from './Articles';
import Article01 from './Article01';
import Article02 from './Article02';
import Article03 from './Article03';
import Tests from './Tests';
import Game from './Game';

class Main extends Component {
   render() {
      return (
         <HashRouter>
            <div>
               <Header />
               <div className="content _container">
                  <Route exact path="/Home" component={Home} />
                  <Route exact path="/Articles" component={Articles} />
                  <Route exact path="/Article01" component={Article01} />
                  <Route exact path="/Article02" component={Article02} />
                  <Route exact path="/Article03" component={Article03} />
                  <Route exact path="/Tests" component={Tests} />
                  <Route exact path="/Game" component={Game} />
               </div>
            </div>
         </HashRouter>
      );
   }
}

export default Main;