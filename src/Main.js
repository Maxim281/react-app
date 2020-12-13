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
import SideBar from './SideBar';


class Main extends Component {
   render() {
      return (
         <HashRouter>
            <div>
               <SideBar />
               <Header />
               <div className="flex _container">
                  <div className="content">
                     <Route exact path="/Home" component={Home} />
                     <Route exact path="/Articles" component={Articles} />
                     <Route exact path="/Article01" component={Article01} />
                     <Route exact path="/Article02" component={Article02} />
                     <Route exact path="/Article03" component={Article03} />
                     <Route exact path="/Tests" component={Tests} />
                     <Route exact path="/Game" component={Game} />
                  </div>
               </div>
            </div>
         </HashRouter>
      );
   }
}

export default Main;