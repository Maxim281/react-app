import React, {Component} from 'react';
import './Game.css';

class Game extends Component {
   constructor(props) {
      super(props);
		this.state = {
         lives: 3,
      }
	}

   handleClick = (e) => {
      let text = document.getElementById("text");
      text.innerHTML = "открывается " + e.target.innerHTML;
      let randomNamber = Math.round((Math.random() * 100));
      if (this.state.lives === 0){
         text.innerHTML = "жизни закончились";
         return false;
      }
      setTimeout(() => {
         if(randomNamber >= 66){
            this.state.lives--;
            text.innerHTML = "вы выиграли";
         }
         if(randomNamber >= 33 && randomNamber<= 66){
            text.innerHTML = "+ попытка";
         }
         if(randomNamber <= 33){
            this.state.lives--;
            text.innerHTML = "вы проиграли";
         }
      }, 5000);
   }

   render() {
      
      return (
         <div className="game">
            <h2>Игра</h2>
            <p id="text">выберите</p>
            <div className="game__content">
               <button className="game__item" onClick={this.handleClick}>A1</button>
               <button className="game__item" onClick={this.handleClick}>B1</button>
               <button className="game__item" onClick={this.handleClick}>C1</button>
               <button className="game__item" onClick={this.handleClick}>D1</button>
               <button className="game__item" onClick={this.handleClick}>E1</button>
               <button className="game__item" onClick={this.handleClick}>A2</button>
               <button className="game__item" onClick={this.handleClick}>B2</button>
               <button className="game__item" onClick={this.handleClick}>C2</button>
               <button className="game__item" onClick={this.handleClick}>D2</button>
               <button className="game__item" onClick={this.handleClick}>E2</button>
               <button className="game__item" onClick={this.handleClick}>A3</button>
               <button className="game__item" onClick={this.handleClick}>B3</button>
               <button className="game__item" onClick={this.handleClick}>C3</button>
               <button className="game__item" onClick={this.handleClick}>D3</button>
               <button className="game__item" onClick={this.handleClick}>E3</button>
               <button className="game__item" onClick={this.handleClick}>A4</button>
               <button className="game__item" onClick={this.handleClick}>B4</button>
               <button className="game__item" onClick={this.handleClick}>C4</button>
               <button className="game__item" onClick={this.handleClick}>D4</button>
               <button className="game__item" onClick={this.handleClick}>E4</button>
               <button className="game__item" onClick={this.handleClick}>A5</button>
               <button className="game__item" onClick={this.handleClick}>B5</button>
               <button className="game__item" onClick={this.handleClick}>C5</button>
               <button className="game__item" onClick={this.handleClick}>D5</button>
               <button className="game__item" onClick={this.handleClick}>E5</button>
            </div>
         </div>
      );
   }
}

export default Game;