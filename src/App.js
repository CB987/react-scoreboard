import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    //Set up state
    this.state = {
      scores: [
        {
          id: 1,
          name: "ahjuma",
          score: 1001
        }, {
          id: 2,
          name: "jeffles",
          score: 20
        }, {
          id: 3,
          name: "stinkface",
          score: 500
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1> scoreboard app</h1>
        <div className="score-container">
          {this._scoresAsCards()}
        </div>
      </div>
    );
  }

  _scoresAsCards() {
    const cards = this.state.scores.map(score => {
      return (
        <div key={score.id}>
          <h2>name: {score.name} // score: {score.score}</h2>
          <button onClick={() => this._incrementScoreById(score.id)}>+</button>
        </div>
      );
    });
    return cards
  }
//version 1 way to do it: .map, manually comstructing replacement
  // _incrementScoreById(id) {
  //   // find the player in this.state.scores
  //   //increment their score
  //   const newScores = this.state.scores.map(jeff => {
  //     if (jeff.id !== id) {
  //       return jeff
  //     } else {
  //       return {
  //         id: jeff.id,
  //         name : jeff.name,
  //         score: jeff.score + 1
  //       }
  //     }
  //   })
  //   
//version 2: .map, use shorthand to copy values out of the original
_incrementScoreById(id) {
  //find the player in this.state.scores
  //increment their score
  const newScores = this.state.scores.map(bruce => {
    if (bruce.id !== id) {
      return bruce;
    } else {
      return {
        ...bruce, 
        score: bruce.score + 1
      };
    }
  });
  // and call this.setState to rerender 
    this.setState({
      scores: newScores
    })
    console.log('hellooooo');
  }
}



export default App;
