import React from 'react';

const Options = ({option,optionBtn}) => {
    return (
        <div>
            <ul>
                <li onClick={() => optionBtn(option)} className='grid lg:grid-cols-1 font-semibold mt-4 hover:bg-green-400 cursor-pointer lg:w-96 sm:w-3/6 border-solid border-2 border-indigo-200 p-4 rounded-lg'>{option}</li>
            </ul>
        </div>
    );
};

export default Options;