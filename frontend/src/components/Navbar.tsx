import React from 'react';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    // Проверяем наличие информации об аутентификации в локальном хранилище
    const isAuth = localStorage.getItem('token') !== null;


    return (
        <nav className='flex justify-between items-center px-2 py-4 border-b-2'>
            <ul>
                <Link to='/' className='text-2xl'>PetApp</Link>
            </ul>
            <ul className='flex gap-16 text-[16px] text-gray-500'>
                {isAuth ? (
                    // Если пользователь аутентифицирован, отображаем ссылки на различные страницы приложения
                    <>
                        <Link to='/download' className='hover:text-gray-400 hover:duration-200 cursor-pointer'>Download</Link>
                        <Link to='/posts' className='hover:text-gray-400 hover:duration-200 cursor-pointer'>Posts</Link>
                        <Link to='/profile' className='hover:text-gray-400 hover:duration-200 cursor-pointer'>Profile</Link>
                        <Link to='/' className='hover:text-gray-400 hover:duration-200 cursor-pointer'>Home</Link>
                    </>
                ) : (
                    // Если пользователь не аутентифицирован, отображаем ссылки на страницу входа и регистрации
                    <>
                        <Link to='/login' className='hover:text-gray-400 hover:duration-200 cursor-pointer'>Login</Link>
                        <Link to='/register' className='hover:text-gray-400 hover:duration-200 cursor-pointer'>Register</Link>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
