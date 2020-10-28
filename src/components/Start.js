import React from 'react';
import {gamePage, startPage} from "../utils/Constants";


const Start = props => {
    const handleStartGame = event => {
        const player = event.currentTarget.player.value.trim()
        if(player ==='') {
            alert('Enter your name')
        } else {
            props.changePage(gamePage, player);
        }
    }
    return (
        <div className='container'>
            <form onSubmit={handleStartGame}>
                <h1 className='h1'>Ready for War</h1>
                <input className='input' type='text' placeholder='enter name' name='player'/>
                <button className='button' type='submit'>start</button>
            </form>
        </div>
    );
};

export default Start;