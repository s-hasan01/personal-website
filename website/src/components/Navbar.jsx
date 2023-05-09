import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaPaperclip, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../images/devlogo.png'

const Navbar = () => {
    const [bar, setBar] = useState(false)
    const onClick = () => setBar(!bar)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-amber-50'>
            <div className='z-10'>
                <img className='hover:scale-110 duration-300' src={Logo} alt='logo' style={{width: '80px'}}/>
            </div>

            {/* navbar menu */}
            <div>
                <ul className='hidden sm:flex'>
                    <li className='hover:scale-110 duration-600'>Home</li>
                    <li className='hover:scale-110 duration-600'>About</li>
                    <li className='hover:scale-110 duration-600'>Skills</li>
                    <li className='hover:scale-110 duration-600'>My Work</li>
                    <li className='hover:scale-110 duration-600'>Contact</li>
                </ul>
            </div>

            {/* hamburger menu */}
            <div onClick={onClick} className={bar ? 'z-10': 'sm:hidden z-10'}>
                <FaBars/>
            </div>

            {/* mobile menu */}
            <div className={!bar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center align-middle md:hidden'}>
                <ul>
                    <li className='py-6 text-4xl hover:scale-110'>Home</li>
                    <li className='py-6 text-4xl hover:scale-110'>About</li>
                    <li className='py-6 text-4xl hover:scale-110'>Skills</li>
                    <li className='py-6 text-4xl hover:scale-110'>Work</li>
                    <li className='py-6 text-4xl hover:scale-110'>Contact</li>
                </ul>
            </div>

            {/* socials */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 sm:hidden md:hidden'>
                <ul>
                    <li className='w-[155px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 text-[18px] bg-[#2D64BC] font-semibold'>
                        <a className='flex justify-between items-center w-full text-amber-50' href="www.linkedin.com/in/sajjad-hasan1">
                            LinkedIn <FaLinkedin size={38}/>
                        </a>
                    </li>
                    <li className='w-[155px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 text-[18px] bg-zinc-800 font-semibold'>
                        <a className='flex justify-between items-center w-full text-[#F2F6FB]' href="www.linkedin.com/in/sajjad-hasan1">
                            GitHub <FaGithub size={38} color='#F2F6FB'/>
                        </a>
                    </li>
                    <li className='w-[155px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 text-[18px] bg-green-950 font-semibold'>
                        <a className='flex justify-between items-center w-full text-[#F2F6FB]' href="www.linkedin.com/in/sajjad-hasan1">
                            Resume <FaPaperclip size={33} color='#F2F6FB'/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;