import React, {Component} from 'react';

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {num: 1};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let rando = Math.floor(Math.random()* 10 + 1);
        this.setState ({num: rando});
    }
    render(){
        return(
            <div>
                <h1>
                    The number is {this.state.num}
                </h1>
                {this.state.num === 7 ? <h2>YOU WIN!</h2>: <button onClick={this.handleClick}>Click me!</button>}
               
            </div>
        )
    }
}

export default Game;
