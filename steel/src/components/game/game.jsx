import React from 'react';
import cl from './game.module.css'
import bg from '../../img/gameBg.jpg'
import MyButton from "../UI/myButton/myButton";

const Game = ({id, img, title, genre}) => {
    return (
        <div className={cl.block} style={{backgroundImage: `url(${bg})`}} key={id}>
            <div style={{backgroundImage: `url(${img})`}} className={cl.img}></div>
            <h3 style={{color: 'white'}}>{title}</h3>
            <p style={{color: 'darkgrey'}}>{genre}</p>
            <MyButton style={{width: '100%', height: '40px'}} text={`В корзину`}/>
        </div>
    );
};

export default Game;