import React from 'react';
import react_logo from '../images/react.png'


const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] text-amber-50'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies I have worked with //</p>
                </div>
                <div className='w-full grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div>
                        <img className='w-24' src={react_logo} alt='react icon'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;