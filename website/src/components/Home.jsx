import React from 'react';
import {HiArrowRight} from 'react-icons/hi';
import TypingText, {useSyncAnimation} from 'react-text-typing-animation';

const Home = () => {
    const sync = useSyncAnimation();

    return (
        <div className='w-full h-screen bg-[#0a192f] px-8'>

            {/* text-box */}
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full text-amber-50'>
                <p className='text-pink-600 text-2xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-amber-50'>Sajjad Hassan</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'><TypingText text={"I'm a Full-Stack Developer."} order={0} sync={sync} reverse={true} speed={1}/></h2>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'><TypingText text={"I'm a Database Developer."} order={1} sync={sync} reverse={true} speed={1}/></h2>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'><TypingText text={"I'm a Software Engineer."} order={2} sync={sync} speed={1}/></h2>
                <div className='py-3'>
                    <button className='text-amber-50 border-2 px-3 py-1 flex hover:bg-pink-600 hover:scale-105 duration-300'>My Work</button>
                </div>
            </div>
        </div>
    );
};

export default Home;