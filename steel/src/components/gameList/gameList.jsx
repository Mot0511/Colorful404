import React, {useState, useMemo} from 'react';
import Game from '../game/game'
import cl from './gameList.module.css'
import axios from "axios";

const GameList = () => {

    const [list, setList] = useState([])
    useMemo(() => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/sql',
            data: JSON.stringify({"sql": "SELECT * FROM games"}),
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        })
            .then(res => {
                setList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    let image
    return (
        <div className={cl.gameList}>
            {
                list.map(game => {
                    image = require(`../../img/gameImages/${game.image}`)
                    console.log(game.genre)
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