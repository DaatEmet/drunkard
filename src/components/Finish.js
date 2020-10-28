import React from 'react';
import {startPage} from "../utils/Constants";

const Finish = props => {
    return (
        <div className='container'>
            <h2>{props.game.isWin? 'Win' : 'Lose'}</h2>
            <h2>{props.game.countLose} - {props.game.countWin}</h2>
            <button onClick={()=>{props.changePage(startPage)}}>Again?</button>
        </div>
    );
};

export default Finish;