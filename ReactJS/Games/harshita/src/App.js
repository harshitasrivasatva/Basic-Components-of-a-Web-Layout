import React, { Component } from 'react';

import Popup from './Gamepopup';
import "./App.css"

class App extends Component{
    constructor(){
        super();
        this.state = {
            isStart: true,
            prevCardId:null,
            points:0,
            counter:0,
            isGameEnd: false,
            isWin:false,
            cards: [
                {
                    id: 1,
                    name: "1",
                    isFlip: false
                },
                {
                    id: 2,
                    name: "2",
                    isFlip: false
                },
                {
                    id: 3,
                    name: "3",
                    isFlip: false
                },
                {
                    id: 4,
                    name: "4",
                    isFlip: false
                },
                {
                    id: 5,
                    name: "5",
                    isFlip: false
                },
                {
                    id: 6,
                    name: "6",
                    isFlip: false
                },
                {
                    id: 7,
                    name: "1",
                    isFlip: false
                },
                {
                    id: 8,
                    name: "2",
                    isFlip: false
                },
                {
                    id: 9,
                    name: "3",
                    isFlip: false
                },
                {
                    id: 10,
                    name: "4",
                    isFlip: false
                },
                {
                    id: 11,
                    name: "5",
                    isFlip: false
                },
                {
                    id: 12,
                    name: "6",
                    isFlip: false
                },
            ]
        }
    }

    cardFlipHandle = (isCardFliped, id) => {
        if(isCardFliped===true || this.state.isGameEnd) return;

        let newCards = this.state.cards;
        let currCardId;
        let currVal, prevVal;
        let newPoints, newCounter;

        newPoints =this.state.points;
        newCounter = this.state.counter + 1;

        newCards.forEach(card => {
            if(card.id === id){
               card.isFlip = true;
               currCardId =card.id;
               currVal = card.name;
            }

            if(card.id === this.state.prevCardId){
                prevVal = card.name;
            }
        });

        

        if(this.state.prevCardId !== null) {
            console.log(" here  -> " , newCounter, newCounter%2);
            if(newCounter%2 === 0 && currVal === prevVal)
                newPoints += 1;
        }    
                
        this.setState({ cards: newCards, points: newPoints, counter: newCounter, prevCardId: currCardId});

        console.log(this.state, currVal, prevVal, newCounter);
    }

    endGameHandle = () => {
        console.log(this.state);

        if(this.state.points === 6)
           this.setState({ isWin: true });
        
        this.setState({isGameEnd: true})   
    }

    render(){
        return(
            <div>
            <div className="text-center d-flex align-item-center justify-content-center" style={this.state.isGameEnd ? {opacity:"0.2"} : null}>
               <button 
                    className="btn btn-outline-primary px-5 py-3"
                    style={this.state.isStart ? {display:"none"} : {height:"auto", fontSize:"16px"}}
                    onClick={() => this.setState({isStart: true})}
                >
                    Play Game
                </button>

                {
                    this.state.isStart ? (
                        <div>
                            <div className="row" style={this.state.isGameEnd ? {width:"80%", margin:"0 20%" , background:"blur(10%)"}:{width:"80%", margin:"0 20%"}}>
                             {
                                 this.state.cards.map((card) => {
                                     return (
                                         <div
                                             className="col-lg-3 m-1 th-card"
                                             onClick={() => this.cardFlipHandle(card.isFlip,     card.id)}
                                             style={card.isFlip ? {backgroundColor:"rgb(3, 60, 174)"} : null}
                                         > 
                                             {card.isFlip ? card.name : "Flip Me"}  
                                         </div>
                                     )
                                 })
                             }  
                            </div>
                            <button 
                                onClick={this.endGameHandle}
                                style={{position:"fixed", top:"150px", right:"100px", width:"100px", height:"100px" , borderRadius:"50%", color:"white", backgroundColor:"rgb(3, 60, 174"}}
                            >
                                End Game
                            </button>
                        </div>
                    ) : null
                }
            </div>
            <div>
            {
                this.state.isGameEnd ? (
                    <Popup 
                        isWin={this.state.isWin}
                        points={this.state.points}
                        closeHandle={() => window.location.reload(false)}
                    />
                ) : null
            }
            </div>
            </div>
        )
    }
}

export default App;