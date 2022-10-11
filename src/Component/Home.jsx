import React from 'react';
import logo from './image/logo.png';
import Topics from './Topics';
const Home = () => {
    return (
        <div>
            <div className="container flex flex-col bg-gray-200 items-center px-4 py-16 pb-2 mx-auto text-center lg:pb-5 md:py-32 md:px-10 lg:px-32 text-gray-900">
                <div className='w-20'>
                    <img src={logo} alt='/' />
                </div>
                <h1 className="text-3xl font-bold leading-none sm:text-4xl xl:max-w-3xl text-gray-800">
                    Welcome To Programming Quiz Website
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                    Quizzes will help you improve your programming skills.
                </p>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;