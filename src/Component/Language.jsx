import React from 'react';
import { Link } from 'react-router-dom';

const Language = ({language}) => {
    const { name, logo,id } = language;
    return (
        <div className='bg-gray-200	 p-6 rounded shadow-lg'>
            <img className='bg-slate-900 object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
                src={logo}
                alt='/' />
            <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
            <Link to={`/language/${id}`}>
                <button type='button' className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'>
                    Start Quiz
                </button>
            </Link>
        </div>
    );
};

export default Language;