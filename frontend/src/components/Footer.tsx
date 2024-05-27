// src/pages/NotFound.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className=' text-gray-500
         border-t-2
          py-8'>
            <ul className='flex justify-around cursor-pointer'>
                <b>
                    2024 PetApp, Inc. All rights reserved.
                </b>
                <li className='hover:text-gray-400
                hover:underline-offset-2
                hover:duration-200
                hover:underline'>
                   Github
                </li>

                <li className='hover:text-gray-400
                hover:underline-offset-2
                hover:duration-200
                hover:underline'>
                    Cвязаться с разработчиком
                </li>

                <li className='hover:text-gray-400
                hover:underline-offset-2
                hover:duration-200
                hover:underline'>
                   Портфолио
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
