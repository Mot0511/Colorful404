import React from 'react';
import cl from '../styles/home.module.css'
import MyInput from "../components/UI/myInput/myInput";
import GameList from "../components/gameList/gameList";

const Home = () => {
    return (
        <div className={cl.body}>
                <div className={cl.searchDiv}>
                    <MyInput style={{width: '98%', height: '25px'}} placeholder={'поиск'}/>
                </div>
                <GameList />
        </div>
    );
};

export default Home;