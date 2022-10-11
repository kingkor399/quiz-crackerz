import React from 'react';

const Options = ({option,optionBtn}) => {
    return (
        <div>
            <ul>
                <li onClick={() => optionBtn(option)} className='grid grid-cols-1 font-semibold mt-4 hover:bg-green-400 cursor-pointer w-96 border-solid border-2 border-indigo-200 p-4 rounded-lg'>{option}</li>
            </ul>
        </div>
    );
};

export default Options;