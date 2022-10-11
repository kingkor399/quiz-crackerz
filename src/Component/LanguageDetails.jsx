import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizees from './Quizees ';

const LanguageDetails = () => {
    const language = useLoaderData();
    const languageName = language.data;
    const {data} = language;
    const {questions} = data;
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center mt-2'>Quiz of {languageName.name}</h2>
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