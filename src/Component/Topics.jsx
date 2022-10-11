import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const Quizzes = useLoaderData();
    return (
        <div>
            <h2>This is topics</h2>
        </div>
    );
};

export default Topics;