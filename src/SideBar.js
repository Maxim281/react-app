import React, {Component} from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import './style.css';

class SideBar extends Component {
   render() {
      return (
         <HashRouter>
            <div className="sideBar__container">
               <ul className="sideBar">
                  <li><NavLink to="/Article01">Статья #1</NavLink></li>
                  <li><NavLink to="/Article02">Статья #2</NavLink></li>
                  <li><NavLink to="/Article03">Статья #3</NavLink></li>
               </ul>
            </div>
         </HashRouter>
      );
   }
}

export default SideBar;