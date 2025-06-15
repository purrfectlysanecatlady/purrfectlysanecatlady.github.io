import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

function App2() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [wins, setWins] = useState(null)
    const [losses, setLosses] = useState(null)
    const [streak, setStreak] = useState(null);
    const [lastOutcome, setLastOutcome] = useState(null);

    const handleChoice = (player) => {
        const choices = ['rock', 'paper', 'scissors'];
        const computer = choices[Math.floor(Math.random() * choices.length)];

        setPlayerChoice(player);
        setComputerChoice(computer);

        if (player === computer) {
            setResult('⚖ Draw')
            setStreak(0)
            setLastOutcome('draw')
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')) {
            setResult("🏆 You win!");
            setWins(wins + 1);
            setStreak(lastOutcome == 'win' ? streak + 1 : 1);
            setLastOutcome('win');
        }
        else {
            setResult("😔 You lose!");
            setLosses(losses + 1);
            setStreak(0);
            setLastOutcome('lose');
        }
    };
    const resetGame = () => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult(null);
        setWins(null);
        setLosses(null);
    };

    return <div className='game-container'>
        <h1>Rock Paper Scissors</h1>
        <p>Choose your weapon:</p>
        <div className="buttons">
            <button onClick={() => handleChoice('rock')}>💎 Rock</button>
            <button onClick={() => handleChoice('paper')}>📄 Paper</button>
            <button onClick={() => handleChoice('scissors')}>✂️ Scissors</button>
        </div>
        {playerChoice && computerChoice && (<div className="results">
            <p>You chose: {playerChoice}</p>
            <p>Computer chose: {computerChoice}</p>
            <h2>{result}</h2>
        </div>
        )}
        {wins + losses > 0 && (
            <div className="score">
                <p>Wins: {wins} | Losses: {losses} </p>
                <p>Win Rate: {Math.round(wins / (wins + losses) * 100)}%</p>
            </div>
        )}
        {streak > 1 && <p>🔥 You're on a {streak}-win streak!</p>}
        <button onClick={resetGame} className="play-again">
            🔄Play Again
        </button>
    </div>;
}

root.render(
    < React.StrictMode >
        <App2 />
    </React.StrictMode >
);
