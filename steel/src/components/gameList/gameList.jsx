import React, {useState, useEffect} from 'react';
import Game from '../game/game'
import cl from './gameList.module.css'

const GameList = () => {
    const [list, setList] = useState([
        {id: 1, title: 'Minecraft', image: 'minecraft.jpg', genre: 'Стратегия, песочница', price: '1000'},
    ])

    let image
    return (
        <div className={cl.gameList}>
            {
                list.map(game => {
                    image = require(`../../img/gameImages/${game.image}`)
                    return (
                          <Game img={image} title={game.title} genre={game.genre} price={game.price} id={game.id}/>
                    )
                }
                )
            }
       </div>
    );
};

export default GameList;