import React, {Component} from 'react';
import {NavLink } from 'react-router-dom';
import './style.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Главная</h2>
                <ul className="menu home__menu">
                    <li><NavLink exact to="/Articles">Статьи</NavLink></li>
                    <li><NavLink to="/Tests">Тесты</NavLink></li>
                    <li><NavLink to="/game">Игра</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Home;
