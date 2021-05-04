import React, {Component} from 'react';
import {Route, HashRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Articles from './Articles';
import ArticlesComponent from './ArticlesComponent';
import Tests from './Tests';
import Game from './Game';
import qs from 'querystring';
import './style.css';


class Main extends Component {

   componentDidMount() {
      const params = window.location.hash.slice(3);
      const paramsAsObject = qs.parse(params);
      // let user = 1;
      let user = paramsAsObject.vk_user_id;
      let a = localStorage.setItem('user', user);

      console.log(params)
      console.log(paramsAsObject)
      console.log(user)
      console.log(localStorage)
      console.log(a)
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
                     <Route exact path="/game" component={Game} />
                     <Route exact path="/Tests" component={Tests} />
                  </div>
               </div>
            </div>
         </HashRouter>
      );
   }
}

export default Main;