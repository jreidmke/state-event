import React, {useState} from 'react';
import "./NumberGame.css";

const NumberGame = (props) => {
    const genRandom = () => {
        return Math.floor(Math.random() * 10) + 1;
    }

    const [guess, setGuess] = useState(genRandom());
    const [target, setTarget] = useState(genRandom());
    const isWinner = target === guess;
    const button = <button onClick={() => setGuess(genRandom)}>Generate Num</button>

    return (
        <div>
            <h1>Target Num: {target}</h1>
            <br></br>
            <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess}</h1>
            {isWinner ? null : button}
            {/* Look at this this is cool ^^ */}
        </div>
    )
}

export default NumberGame;