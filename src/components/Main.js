import React from 'react';
import Start from "./Start";
import {finishPage, gamePage} from "../utils/Constants";
import Game from "./Game";
import Finish from "./Finish";

const Main = (props) => {
    console.log(props.game)
    switch (props.page){
        case  gamePage : return <Game gamePage ={props.gamePage} player ={props.player} game ={props.game}/>
        case  finishPage : return <Finish changePage ={props.changePage} game ={props.game}/>
        default: return <Start changePage ={props.changePage}/>
    }
};

export default Main;