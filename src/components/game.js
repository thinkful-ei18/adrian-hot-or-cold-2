import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feedback: 'Make your guess!',
            guesses: [15, 25, 56]
        }
    }

    secretNumber = () => {
        const secret = Math.floor(Math.random() * 100);
        
    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} handleGuess={guess => {
                const newGuesses = this.state.guesses.slice();
                newGuesses.push(guess);
                this.setState({guesses: newGuesses});
                }} />
                <GuessCount count={this.state.guesses.length}/>
                <GuessList guesses={this.state.guesses}/>
            </div>
        );
    }

    }

