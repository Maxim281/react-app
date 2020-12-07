import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Articles extends Component {
   render() {
      return (
         <div>
            <h2>Статьи</h2>
            <ul className="articles__link">
               <li>
                  <Link exact to="#">Ссылка #1</Link>
               </li>
               <li>
                  <Link to="#">Ссылка #2</Link>
               </li>
               <li>
                  <Link to="#">Ссылка #3</Link>
               </li>
            </ul>
         </div>
      );
   }
}

export default Articles;