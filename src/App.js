import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreCard from './ScoreCard';

class App extends Component {
  constructor(props) {
    super(props);

    //Set up state
    this.state = {
      scores: [
        {
          id: 1,
          name: "judge",
          score: 1001
        }, {
          id: 2,
          name: "bernie",
          score: 20
        }, {
          id: 3,
          name: "gracie",
          score: 500
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {" "}
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
        <ScoreCard
          key={score.id}
          id={score.id}
          name={score.name}
          score={score.score}
          plusClick={this._incrementScoreById.bind(this)}
          minusClick={this._decrementScoreById.bind(this)}

        />
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
  // and call this.setState to rerender 
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
    // console.log('hellooooo');
  }

  _decrementScoreById(id) {
    const newScores = this.state.scores.map(jamie => {
      if (jamie.id !== id) {
        return jamie;
      } else {
        return {
          ...jamie,
          score: jamie.score - 1
        };
      }
    });
    this.setState({
      scores: newScores
    })
  }
  //Greg's version:
  // _incrementScoreById(id){
  //   // find the player in this.state.score and increment their score
  //   const newScores = this.state.scores.map(score => {
  //     // change the score for the matching id
  //     if(score.id === id) {
  //       score.score += 1;
  //     }
  //     return score;
  //   });

  //   this.setState({
  //     scores: newScores
  //   })
  // }
  // version 3: .map, object copy + ternary + implicit return
  //using shorthand to copy values out of the original score
  // _incrementScoreById(id) {
  //   //find the player in this.state.scores
  //   //increment their score
  //   const newScores = this.state.scores.map(bob => {
  //     return bob.id !== id ? bob: { ...bob, score: bob.score+1}
  //   })

  // and call this.setState to rerender 

}


export default App;
