import React from 'react'

import {library} from "@fortawesome/fontawesome-svg-core"; 
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Fade from 'react-reveal/Fade';

library.add(fas,fab);

export default function Card({href , src ,title , subtitle , icon ,target}) {
    return (
        <Fade left>
            <div 
                className="relative w-full p-2 my-4 overflow-hidden transition duration-300 transform bg-transparent border-4 border-teal-200 rounded-lg shadow-2xl hover:scale-105">
                <img className="object-center w-full h-56 bg-center bg-cover rounded-lg" src={src} alt="avatar" />
                <div className="flex items-center justify-between pt-4 my-2 mt-4 border-t-2 border-teal-200">
                <div>
                    <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
                    <p className="mx-3 text-sm text-gray-200">{subtitle}</p>
                </div>
                <div >
                    <a 
                        href={href} 
                        rel="noreferrer" 
                        target={target} 
                        className="flex items-center px-4 py-2 space-x-1 text-teal-200 bg-black border-2 border-teal-200 rounded-md hover:bg-teal-200 hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm ">Preview</p> 
                    </a>
                </div>
                </div>
            </div>
        </Fade>
    )
}
