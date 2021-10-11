import React , { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
    export default function Header() {
        const [ show , setShow] = useState(false);
        return (
        <header className="relative h-4 bg-black px-6">
            <div className="flex justify-between h-full py-4">
            <div className="z-40 hidden lg:block">
                <div className="flex justify-center space-x-10 ">
                <a href="#about" className="h-64 text-lg font-semibold text-teal-200 hover:text-white">ABOUT ME</a>
                <a href="#skills" className="text-lg font-semibold text-teal-200 hover:text-white">SKILLS</a>
                <a href="#portfolio" className="text-lg font-semibold text-teal-200 hover:text-white">PORTFOLIO</a>
                <a href="#contact" className="text-lg font-semibold text-teal-200 hover:text-white">CONTACT</a>
                </div>
            </div>
            <div className="block lg:hidden" style={{ zIndex:90 }}>
                <HamburgerMenu
                isOpen={show}
                menuClicked={() => setShow((!show) ? true : false)}
                width={30}
                height={15}
                strokeWidth={2}
                rotate={0}
                color='#30d5c8'
                borderRadius={0}
                animationDuration={0.5}
                />
                {show ?
                <div className="flex flex-col w-64 px-4 py-4 mt-4 leading-9 bg-teal-200 rounded-md">
                    <a href="#about" className="font-semibold text-white">ABOUT ME</a>
                    <a href="#skills" className="font-semibold text-white">SKILLS</a>
                    <a href="#portfolio" className="font-semibold text-white">PORTFOLIO</a>
                    <a href="#contact" className="font-semibold text-white">CONTACT</a>
                </div>
                :
                null
                }
            </div>
            </div>
        </header>
        )
    }
