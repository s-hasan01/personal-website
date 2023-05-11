import React from 'react';
import {HiArrowRight} from 'react-icons/hi';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-amber-50'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='px-3'>
                        <p className='sm:text-right text-3xl font-bold'>Testting it's nice to meet you, jave a look around and learn some more</p>
                    </div>
                    <div className='px-3'>
                        <p>As a software engineer, I am dedicated to crafting elegant and efficient solutions to complex problems. With a strong attention to detail and a passion for learning, I am constantly seeking to improve my skills and stay up-to-date with the latest technologies. My collaborative mindset and strong communication skills make me a valuable team player who is always ready to contribute to the success of any project.</p>
                        <div className='py-8'>
                            <button className='text-amber-50 group border-2 px-3 py-1 flex hover:bg-pink-600 hover:scale-105 duration-300'>
                                My Skills
                                <span className='group-hover:rotate-90 duration-300 ml-2 my-1'>
                            <HiArrowRight/>
                        </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;