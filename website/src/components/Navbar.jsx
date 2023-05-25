import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaPaperclip, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../images/devlogo.png'

const Navbar = () => {
    const [bar, setBar] = useState(false)
    const onClick = () => setBar(!bar)

    return (
        <div name='navbar' className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-amber-50 z-30'>
            <div className='z-10'>
                <img className='hover:scale-110 duration-300 cursor-pointer' src={Logo} alt='logo' style={{width: '120px'}}/>
            </div>

            {/* navbar menu */}
            <div>
                <ul className='hidden sm:flex'>
                    <li className='hover:scale-110 duration-300'>Home</li>
                    <li className='hover:scale-110 duration-300'>About</li>
                    <li className='hover:scale-110 duration-300'>Skills</li>
                    <li className='hover:scale-110 duration-300'>Work</li>
                    <li className='hover:scale-110 duration-300'>Contact</li>
                </ul>
            </div>

            {/* hamburger menu */}
            <div onClick={onClick} className={bar ? 'z-10 sm:hidden cursor-pointer hover:scale-110 duration-300': 'cursor-pointer sm:hidden hover:scale-110 duration-300'}>
                <FaBars/>
            </div>

            {/* mobile menu */}
            <div className={!bar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center text-center items-center sm:hidden'}>
                <ul>
                    <li className='py-6 text-4xl hover:scale-110 duration-300'>Home</li>
                    <li className='py-6 text-4xl hover:scale-110 duration-300'>About</li>
                    <li className='py-6 text-4xl hover:scale-110 duration-300'>Skills</li>
                    <li className='py-6 text-4xl hover:scale-110 duration-300'>Work</li>
                    <li className='py-6 text-4xl hover:scale-110 duration-300'>Contact</li>
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
                    <li className='w-[155px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 text-[18px] bg-blue-300 font-semibold'>
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