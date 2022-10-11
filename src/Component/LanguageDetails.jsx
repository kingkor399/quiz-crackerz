import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizees from './Quizees ';

const LanguageDetails = () => {
    const language = useLoaderData();
    const {data} = language;
    const {questions} = data;
    return (
        <div>
            {
                questions.map(quize => <Quizees
                key = {quize.id}
                quize = {quize}
                ></Quizees>)
            }
        </div>
    );
};

export default LanguageDetails;