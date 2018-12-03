import React from 'react';

function ScoreCard(props) {
    return (
            <div>
                <h2>name: {props.name} // score: {props.score}</h2>
                <button onClick={() => props.plusClick(props.id)}>+</button>
                <button onClick={() => props.minusClick(props.id)}>-</button>
            </div>     
    );
}

export default ScoreCard;