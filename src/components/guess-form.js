import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    // store textinput in state and grab it on submit

    return (
        <form
        onSubmit={(e) => {
            e.preventDefault();
            props.whenSubmitted();
        }}
        >
            <input onChange={(e) => props.whenAnswered(e.target.value)} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

