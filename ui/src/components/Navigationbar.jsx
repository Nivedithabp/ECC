import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';

const Navigationbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const navLinkClass = 'hover:text-[#00df9a] transition border-b-2 border-transparent p-4 hover:border-[#00df9a] cursor-pointer';
    const content = (
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-black transition'>
            <ul className='text-center text-xl p-10'>
                <Link spy={true} smooth={true} duration={500} to="Home" offset={-70}>
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
                </Link>
                <Link spy={true} smooth={true} duration={500} to="About" offset={-70}>
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
                </Link>
                <RouterLink to="/service">
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        Events
                    </li>
                </RouterLink>
                <RouterLink to="/signin">
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        SignIn
                    </li>
                </RouterLink>
                <RouterLink to="/register">
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        Register
                    </li>
                </RouterLink>
            </ul>
        </div>
    );

    return (
        <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
            <div className='h-10vh flex justify-between items-center text-white bg-black px-20 py-4'>
                <h1 className='text-3xl font-bold text-[#785f24]'>GatherCloud</h1>
                <ul className={`lg:flex hidden gap-8 items-center font-normal ${click ? 'hidden' : ''}`}>
                    <Link spy={true} smooth={true} duration={500} to="Home" offset={-70} className={navLinkClass}>Home</Link>
                    <Link spy={true} smooth={true} duration={500} to="About" offset={-70} className={navLinkClass}>About</Link>
                    <RouterLink to="/service" className={navLinkClass}>Events</RouterLink>
                    <RouterLink to="/authentication" className={navLinkClass}>Sign In</RouterLink>
                    <RouterLink to="/register" className={navLinkClass}>Register</RouterLink>
                </ul>
                <div className='lg:hidden block' onClick={handleClick}>
                    {click ? <FaTimes size={20} color="white" /> : <CgMenu size={20} color="white" />}
                </div>
                {click && content}
            </div>
        </nav>
    );
}

export default Navigationbar;
