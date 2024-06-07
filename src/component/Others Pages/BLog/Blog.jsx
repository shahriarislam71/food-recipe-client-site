import React from 'react';

const Blog = () => {
    return (
        <div className='mx-1 md:mx-10 mt-10'>
            <div >
                <h1 className='text-3xl font-extrabold'>1. What is the differences between uncontrolled and controlled components.</h1>
                <p className='mt-3 text-gray-700'>Ans. Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.</p>
            </div>
            <div>
                <h1 className='text-3xl font-extrabold mt-5'>2. How to validate React props using PropTypes?</h1>
                <p className='mt-3 text-gray-700'>Ans. When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console.If default props are set for the React component, the values are first resolved before type checking against propTypes</p>
            </div>
            <div>
                <h1 className='text-3xl font-extrabold mt-5'>3. Tell us the difference between nodejs and express js?</h1>
                <p className='mt-3 text-gray-700'>Ans. Compared to NodeJS, ExpressJS manages server setup clutter more efficiently. In contrast, NodeJS has an event-driven, non-blocking I/O model, which makes it a practical and lightweight server option. There must be a low-latency environment that can handle many concurrent connections.</p>
            </div>
            <div>
                <h1 className='text-3xl font-extrabold mt-5'>4. What is a custom hook, and why will you create a custom hook?</h1>
                <p className='mt-3 text-gray-700'>Ans. Custom Hooks are a powerful feature of React that allows you to encapsulate common functionality into reusable functions. They are a great way to make your code more organized, reusable, and maintainable.</p>
            </div>
        </div>
    );
};

export default Blog;