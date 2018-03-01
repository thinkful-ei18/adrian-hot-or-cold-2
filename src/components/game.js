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
            guesses: [10, 15, 25]
        }
    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback}/>
                <GuessCount count={this.state.guesses.length}/>
                <GuessList guesses={this.state.guesses}/>
            </div>
        );
    }

    }

