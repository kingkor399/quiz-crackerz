import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from './image/logo.png';
import Language from './Language';
const Home = () => {
    const languageData = useLoaderData();
    const languages = languageData.data;
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
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                    {
                        languages.map(language => <Language
                        key = {language.id}
                        language = {language}
                        ></Language>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;