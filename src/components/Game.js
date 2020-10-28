import React, {Component} from 'react';
import {cards, finishPage, gamePage, images} from "../utils/Constants";

let gameCard = [...images];
shuffleArray(gameCard);

function start (){
    gameCard = [...images]
    shuffleArray(gameCard);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

class Game extends Component {
    constructor(props, game) {
        super(props,game);
        this.state = {
            player: props.player,
            hand1: 'J',
            hand2: 'J',
            game : {
                countLose : props.game.countLose,
                countWin: props.game.countWin,
                isWin: props.game.isWin
            }


        }
    }

    gameProcess = () => {
        if(gameCard.length === 0){
            start();
            this.state.game.isWin = this.state.game.countLose < this.state.game.countWin;
            this.props.gamePage(finishPage,this.state.game);
        } else {
            console.log(this.state.game.countLose)
            console.log(this.state.game.countWin)
            let hand1 = gameCard.shift();
            this.setState({hand1: hand1});
            let hand2 = gameCard.shift()
            this.setState({hand2: hand2});
            hand1 > hand2 ? ++this.state.game.countLose : ++this.state.game.countWin;

        }
    }


    render() {
        return (
            <div className='container'>
                <h2 className='h2Left'>computer</h2>
                <section>
                    <img src={this.state.hand1}/>
                    <img src={this.state.hand2}/>
                </section>
                <button className='button' onClick={this.gameProcess}>next</button>
                <h2>{this.state.player}</h2>
            </div>

        );
    };
}

export default Game;