import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container rounded-lg bg-gray-100 mb-10 mt-4 shadow-md lg:w-3/6 flex flex-col items-center mx-auto text-center lg:pb-2 md:py-10 md:px-10 lg:px-10">
                <h3><span className='underline text-2xl '>Questions:</span>  What is purpose of react router</h3>
                <h3><span className='underline text-2xl'>Answer:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h3>
            </div>
            <div className="container rounded-lg bg-gray-100 mb-10 mt-4 shadow-md lg:w-3/6 flex flex-col items-center mx-auto text-center lg:pb-2 md:py-10 md:px-10 lg:px-10">
                <h3><span className='underline text-2xl'>Questions:</span>  How Does Context Api Works</h3>
                <h3><span className='underline text-2xl'>Answer:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h3>
            </div>
            <div className="container rounded-lg bg-gray-100 mb-10 mt-4 shadow-md lg:w-3/6 flex flex-col items-center mx-auto text-center lg:pb-2 md:py-10 md:px-10 lg:px-10">
                <h3><span className='underline'>Questions:</span>  What is Useref</h3>
                <h3><span className='underline'>Answer:</span>  The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</h3>
            </div>
        </div>
    );
};

export default Blog;