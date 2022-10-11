import React from 'react';
import Options from './Options';

const Quizees = ({ quize }) => {
    const { options, question, correctAnswer } = quize;
    const optionBtn = (option) =>{
        if(option === correctAnswer){
            alert('write')
        }
        else{
            alert('wrong')
        }
    }
    return (
        <div className="container rounded-lg bg-gray-100 mb-10 mt-4 shadow-md w-3/6 flex flex-col items-center mx-auto text-center lg:pb-2 md:py-10 md:px-10 lg:px-10">
            <div className=''>
                <h2 className='font-bold'>Quiz: {question}</h2>
            </div>
            <div>
                {
                    options.map((option) => <Options
                        option={option}
                        optionBtn = {optionBtn}
                    ></Options>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Quizees;