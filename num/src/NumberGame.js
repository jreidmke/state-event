import React, {useState} from 'react';

const NumberGame = (props) => {
    const genRandom = () => {
        return Math.floor(Math.random() * 10) + 1;
    }

    const [guess, setGuess] = useState(genRandom());
    const [target, setTarget] = useState(genRandom());

    return (
        <div>
            <h1>Target Num: {target}</h1>
            <br></br>
            <h1>Your Guess: {guess}</h1>
            <button onClick={() => setGuess(genRandom)}>Generate Num</button>
        </div>
    )
}

export default NumberGame;