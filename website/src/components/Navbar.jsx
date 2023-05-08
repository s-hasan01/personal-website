import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../images/logo1.png'

const Navbar = () => {
    const [bar, setBar] = useState(false)
    const onClick = () => setBar(!bar)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-amber-50'>
            <div className='z-10'>
                <img src={Logo} alt='logo' style={{width: '70px'}}/>
            </div>

            {/* navbar menu */}
            <div>
                <ul className='hidden sm:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>My Work</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* hamburger menu */}
            <div onClick={onClick} className={bar ? 'z-10': 'sm:hidden z-10'}>
                <FaBars/>
            </div>

            {/* mobile menu */}
            <div className={!bar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <ul>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Work</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;