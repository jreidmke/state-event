import React, {useState} from 'react';
import "./NumberGame.css";

const NumberGame = (props) => {
    const genRandom = () => {
        return Math.floor(Math.random() * 10) + 1;
    }

    const restart= () => {
        (setTarget(genRandom()));
        setGuessCount(0);
    };

    const makeGuess = () => {
        setGuess(genRandom());
        setGuessCount(guessCount + 1);
    }

    const [guess, setGuess] = useState(genRandom());
    const [target, setTarget] = useState(genRandom());
    const [guessCount, setGuessCount] = useState(0);
    const isWinner = target === guess;
    const button = <button onClick={() => makeGuess()}>Generate Num</button>

    return (
        <div>
            <h1>Target Num: {target}</h1>
            <br></br>
            <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess}</h1>
            <h4>Guess Count: {guessCount}</h4>
            {isWinner ? null : button}
            {/* Look at this this is cool ^^ */}
            <button onClick={restart}>New Game</button>
        </div>
    )
}

export default NumberGame;