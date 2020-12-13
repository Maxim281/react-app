import React, {Component} from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import './style.css';

class Header extends Component {
   render() {
      return (
         <HashRouter>
               <div className="header">
                  <div className="_container">
                     <ul className="menu">
                        <li><NavLink exact to="/Home">Главная</NavLink></li>
                        <li><NavLink exact to="/Articles">Статьи</NavLink></li>
                        <li><NavLink to="/Tests">Тесты</NavLink></li>
                        <li><NavLink to="/Game">Игра</NavLink></li>
                     </ul>
                  </div>
               </div>
         </HashRouter>
      );
   }
}

export default Header;