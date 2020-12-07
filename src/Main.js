import React, {Component} from 'react';
import {Route, HashRouter, NavLink } from 'react-router-dom';
import Home from './Home';
import Articles from './Articles';
import Tests from './Tests';
import Game from './Game';
import './style.css';

class Main extends Component {
   render() {
      return (
         <HashRouter>
            <div>
               <div className="header">
                  <div className="_container">
                     <ul className="menu">
                        <li><NavLink exact to="/">Главная</NavLink></li>
                        <li><NavLink exact to="/Articles">Статьи</NavLink></li>
                        <li><NavLink to="/Tests">Тесты</NavLink></li>
                        <li><NavLink to="/Game">Игра</NavLink></li>
                     </ul>
                  </div>
               </div>
               <div className="content _container">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Articles" component={Articles} />
                  <Route path="/Tests" component={Tests} />
                  <Route path="/Game" component={Game} />
               </div>
            </div>
         </HashRouter>
      );
   }
}

export default Main;