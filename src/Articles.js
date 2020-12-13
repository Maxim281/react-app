import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Articles extends Component {
   render() {
      return (
               <div>
                  <h2>Статьи</h2>
                     <div className="_container">
                        <ul className="articles__link">
                           <li>
                              <NavLink to="/Article01">Статья #1</NavLink>
                           </li>
                           <li>
                              <NavLink to="/Article02">Статья #2</NavLink>
                           </li>
                           <li>
                              <NavLink to="/Article03">Статья #3</NavLink>
                           </li>
                        </ul>
                     </div>
               </div>
      );
   }
}

export default Articles;