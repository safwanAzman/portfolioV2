import React from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core"; 
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas,fab);

export default function Card({href , src ,title , subtitle , icon ,target}) {
    return (
        <a 
            href={href} 
            rel="noreferrer" 
            target={target}
            className="transform  hover:scale-105 transition duration-300 relative w-full p-2 my-4 overflow-hidden bg-transparent border-4 rounded-lg shadow-2xl border-teal-200">
            <img className="object-center bg-center bg-cover w-full h-56 rounded-lg" src={src} alt="avatar" />
            <div className="pt-4 my-2 flex justify-between items-center border-t-2 border-teal-200 mt-4">
            <div>
                <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
                <p className="mx-3 text-sm  text-gray-200">{subtitle}</p>
            </div>
            <div className="flex items-center p-2 rounded-full bg-black">
                <FontAwesomeIcon icon={["fas", `${icon}`]} color="#30d5c8" size="sm" />
            </div>
            </div>
        </a>
    )
}
