import React, {Component} from 'react';
import queryString from 'query-string';
import './Game.css';

class Game extends Component {
   constructor(props) {
      super(props);
      this.urlClick = window.location.origin + "/wp-json/myapi/v1/game/Mines/";
      // this.urlClick = 'http://wpfolder/wp-json/myapi/v1/game/Mines/';
      this.numberAttempts = 3;
      this.boxClass = [
         "","","","","", "","","","","","","","","","","","","","","","","","","",""
      ]; 
      this.state= {
         boxClass: this.boxClass,
      } 
   this.handleClick = this.handleClick.bind(this);
}

   handleClick = (e) => {
      
      let text = document.getElementById("text");
      let attempts = document.getElementById("attempts");
      text.innerHTML = "Открывается " + e.target.innerHTML;
      let keyId = e.currentTarget.dataset.id;
      let user_id = localStorage.getItem('user');
      let number_cell = e.currentTarget.dataset.id;
      e.currentTarget.setAttribute("disabled", "disabled");
      // console.log(templateUrl);
      
      fetch(this.urlClick, {
         method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
         body: queryString.stringify({user_id:user_id, cell_number:number_cell})
      }).then(function(response) {
         return response.json();
      }).then((data) => {
         
         if (data.type_prize === 1){
            text.innerHTML = data.message;
            this.boxClass[keyId] = "draw";
         }
         else if(data.type_prize === 2){
            text.innerHTML = data.message;
            this.boxClass[keyId] = "win";
            this.numberAttempts--;
         }
         else if (data.type_prize === 3) {
            text.innerHTML = data.message;
            this.boxClass[keyId] = "lose";
            this.numberAttempts--;
            return false;
         }
         else {
            window.location.href = '#/Articles';
         }
         
         if(this.numberAttempts === 0) {
            text.innerHTML = "Ваши попытки закончились!";
            return false;
         }
         
         attempts.innerHTML = "Попытки: " + this.numberAttempts;
         this.setState({boxClass:this.boxClass});
      });
      
      console.log(number_cell);
      console.log(user_id);
      console.log(localStorage)
      
   }


   render() {
      return (
         <div className="game">
            <h2>Игра</h2>
            <p id="text">Выберите ячейку</p>
            <p id="attempts">Попытки: {this.numberAttempts}</p>
            <div className="game__content">
               <div><button data-id="0" className={"game__item " + this.boxClass[0]} onClick={this.handleClick}>A1</button></div>
               <div><button data-id="1" className={"game__item " + this.boxClass[1]} onClick={this.handleClick}>B1</button></div>
               <div><button data-id="2" className={"game__item " + this.boxClass[2]} onClick={this.handleClick}>C1</button></div>
               <div><button data-id="3" className={"game__item " + this.boxClass[3]} onClick={this.handleClick}>D1</button></div>
               <div><button data-id="4" className={"game__item " + this.boxClass[4]} onClick={this.handleClick}>E1</button></div>
               <div><button data-id="5" className={"game__item " + this.boxClass[5]} onClick={this.handleClick}>A2</button></div>
               <div><button data-id="6" className={"game__item " + this.boxClass[6]} onClick={this.handleClick}>B2</button></div>
               <div><button data-id="7" className={"game__item " + this.boxClass[7]} onClick={this.handleClick}>C2</button></div>
               <div><button data-id="8" className={"game__item " + this.boxClass[8]} onClick={this.handleClick}>D2</button></div>
               <div><button data-id="9" className={"game__item " + this.boxClass[9]} onClick={this.handleClick}>E2</button></div>
               <div><button data-id="10" className={"game__item " + this.boxClass[10]} onClick={this.handleClick}>A3</button></div>
               <div><button data-id="11" className={"game__item " + this.boxClass[11]} onClick={this.handleClick}>B3</button></div>
               <div><button data-id="12" className={"game__item " + this.boxClass[12]} onClick={this.handleClick}>C3</button></div>
               <div><button data-id="13" className={"game__item " + this.boxClass[13]} onClick={this.handleClick}>D3</button></div>
               <div><button data-id="14" className={"game__item " + this.boxClass[14]} onClick={this.handleClick}>E3</button></div>
               <div><button data-id="15" className={"game__item " + this.boxClass[15]} onClick={this.handleClick}>A4</button></div>
               <div><button data-id="16" className={"game__item " + this.boxClass[16]} onClick={this.handleClick}>B4</button></div>
               <div><button data-id="17" className={"game__item " + this.boxClass[17]} onClick={this.handleClick}>C4</button></div>
               <div><button data-id="18" className={"game__item " + this.boxClass[18]} onClick={this.handleClick}>D4</button></div>
               <div><button data-id="19" className={"game__item " + this.boxClass[19]} onClick={this.handleClick}>E4</button></div>
               <div><button data-id="20" className={"game__item " + this.boxClass[20]} onClick={this.handleClick}>A5</button></div>
               <div><button data-id="21" className={"game__item " + this.boxClass[21]} onClick={this.handleClick}>B5</button></div>
               <div><button data-id="22" className={"game__item " + this.boxClass[22]} onClick={this.handleClick}>C5</button></div>
               <div><button data-id="23" className={"game__item " + this.boxClass[23]} onClick={this.handleClick}>D5</button></div>
               <div><button data-id="24" className={"game__item " + this.boxClass[24]} onClick={this.handleClick}>E5</button></div>
            </div>
         </div>
      );
   }
}

export default Game;