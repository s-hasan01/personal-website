import React from 'react';
import react_logo from '../images/react.png'
import django from '../images/django.png'
import js from '../images/JS.png'
import postgres from '../images/postgres.png'
import nodejs from '../images/nodejs.png'
import flask from '../images/flask.png'
import gitlab from '../images/gitlab.png'
import angular from '../images/angular.png'


const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] text-amber-50'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies I have worked with //</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 bg-blue-950 rounded-2xl'>
                        <img className='w-20 mx-auto my-4' src={js} alt='js icon'/>
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 bg-blue-950 rounded-2xl'>
                        <img className='w-20 h-24 mx-auto my-4' src={django} alt='django icon'/>
                        <p>Django</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 bg-blue-950 rounded-2xl'>
                        <img className='w-24 h-24 mx-auto my-4' src={gitlab} alt='postgres icon'/>
                        <p className='my-4'>GitLab</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 bg-blue-950 rounded-2xl'>
                        <img className='w-20 mx-auto my-4' src={postgres} alt='postgres icon'/>
                        <p className='my-4'>PostgreSQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 bg-blue-950 rounded-2xl'>
                        <img className='w-20 mx-auto my-4' src={nodejs} alt='postgres icon'/>
                        <p className='my-4'>NodeJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 bg-blue-950 rounded-2xl'>
                        <img className='w-20 h-24 mx-auto my-4' src={flask} alt='postgres icon'/>
                        <p className='my-4'>Flask</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 bg-blue-950 rounded-2xl'>
                        <img className='w-24 mx-auto my-4' src={react_logo} alt='react icon'/>
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 bg-blue-950 rounded-2xl'>
                        <img className='w-24 h-24 mx-auto my-4' src={angular} alt='postgres icon'/>
                        <p className='my-4'>AngularJS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;