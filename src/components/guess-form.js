import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    // store textinput in state and grab it

    constructor(props) {
        super(props);

        this.state = {
            guessInput: 0
        };
    }

    render() {
        return (
            <form
            onSubmit={(e) => {
                e.preventDefault();
                this.props.whenSubmitted();
            }}
            >
                <input onChange={(e) => this.props.whenAnswered(e.target.value)} type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }

};

