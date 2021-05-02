import React, {Component} from 'react';
import {Route, HashRouter } from 'react-router-dom';
import './style.css';
import Header from './Header';
import Home from './Home';
import Articles from './Articles';
import ArticlesComponent from './ArticlesComponent';
import Tests from './Tests';
import Game from './Game';
import qs from 'querystring';


class Main extends Component {

   componentDidMount() {
      const params = window.location.hash.slice(3);
      const paramsAsObject = qs.parse(params);
      let user = paramsAsObject.vk_user_id;
      localStorage.setItem('user', user);

      console.log(paramsAsObject)
   }

   render() {
      return (
         <HashRouter>
            <div>
               <Header />
               <div className="flex _container">
                  <div className="content">
                     <Route exact path="/Home" component={Home} />
                     <Route exact path="/Articles" component={Articles} />
                     <Route exact path="/ArticlesComponent/:id" component={ArticlesComponent} />
                     <Route exact path="/Game" component={Game} />
                     <Route exact path="/Tests" component={Tests} />
                  </div>
               </div>
            </div>
         </HashRouter>
      );
   }
}

export default Main;