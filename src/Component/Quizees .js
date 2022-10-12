import React from 'react';
import { toast } from 'react-toastify';
import Options from './Options';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quizees = ({ quize }) => {
    const { options, question, correctAnswer } = quize;
    const optionBtn = (option) => {
        if (option === correctAnswer) {
            toast.success('CorrectAnswer', { autoClose: 500 })
        }
        else {
            toast.error('WrongAnswer', { autoClose: 500 })
        }

    }
    const eyeBtn = () => {
        toast(correctAnswer)
    }
    return (
        <div className="container rounded-lg bg-purple-100 mb-10 mt-4 shadow-md lg:w-3/6 flex flex-col items-center mx-auto text-center lg:pb-2 md:py-10 md:px-10 lg:px-10">
            <div className='flex'>
                <h2 className='font-bold'>Question: {question}</h2>
                <buttton onClick={() => eyeBtn()}>
                    <EyeIcon className="h-6 w-20" />
                </buttton>
            </div>
            <div>
                {
                    options.map((option,idx) => <Options
                        key = {idx}
                        option={option}
                        optionBtn={optionBtn}
                    ></Options>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Quizees;