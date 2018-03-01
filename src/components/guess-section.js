import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm whenAnswered={(value) => console.log(value)} whenSubmitted={(e) => console.log('Guess submitted!')} />
        </section>
    );
}

