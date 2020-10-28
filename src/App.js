import React from 'react';
import './App.css';
import Main from "./components/Main";
import {startPage} from "./utils/Constants";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player : '',
            activePage : startPage,
            game : {
                countLose : 0,
                countWin: 0,
                isWin: false
            }
        }
    }

    changeActivePage = (page, player) => {
        this.setState({activePage: page, player: player})
    }

    changeGamePage = (page, game) => {
        this.setState({activePage: page, game: game})
    }


    render() {
        return (
            <div>
                <Main page ={this.state.activePage} player ={this.state.player} game ={this.state.game}
                      changePage ={this.changeActivePage} gamePage ={this.changeGamePage}/>
            </div>
        );
    }
}

export default App;
