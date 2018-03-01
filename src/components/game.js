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
            guesses: []
        }
    }

    secretNumber = (guess) => {

        // console.log('could be secret number:', guess); // test if the guess is being passed
        // const secret = Math.floor(Math.random() * 100) + 1; // generate random number from 1 to 100
        const secret = 100; // hard-coded secret number for testing
        const parsedGuess = parseInt(guess, 10);
        const absoluteValue = Math.abs(parsedGuess - secret);

        if (parsedGuess === secret) {
            console.log('You win!');
        } else if (absoluteValue === 5) {
            this.setState({feedback: "Hot"});
        } else {
            this.setState({feedback: "Cold"});
        }
    }

    render() {

        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} handleGuess={guess => {
                const newGuesses = this.state.guesses.slice();
                newGuesses.push(guess);
                this.setState({guesses: newGuesses});
                this.secretNumber(guess);
                }} />
                <GuessCount count={this.state.guesses.length}/>
                <GuessList guesses={this.state.guesses}/>
            </div>
        );
    }

    }

