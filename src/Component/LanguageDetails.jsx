import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LanguageDetails = () => {
    const language = useLoaderData();
    console.log(language)
    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default LanguageDetails;