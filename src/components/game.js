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
            currentGuess: null,
            guesses: []
        }
    }

    secretNumber = (guess) => {
        // const secret = Math.floor(Math.random() * 100) + 1;
        const secret = 50;
        //need to get Guess number from handleGuess!

        if (this.state.currentGuess === 50 ) {
            this.setState({feedback: 'You won!', guesses: [], currentGuess: 0});
        }
    }

    render() {

        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} handleGuess={guess => {
                const newGuesses = this.state.guesses.slice();
                newGuesses.push(guess);
                this.setState({guesses: newGuesses, currentGuess: guess});
                }} />
                <GuessCount count={this.state.guesses.length}/>
                <GuessList guesses={this.state.guesses}/>
            </div>
        );
    }

    }

