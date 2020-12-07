import React, {Component} from 'react';

class Articles extends Component {
   render() {
      return (
         <div>
            <h2>Статьи</h2>
            <p className="articles__link"><a href="#1">link 1</a></p>
            <p className="articles__link"><a href="#2">link 2</a></p>
            <p className="articles__link"><a href="#3">link 3</a></p>
         </div>
      );
   }
}

export default Articles;