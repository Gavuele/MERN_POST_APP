import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [pass, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
    const onPassChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

    const onBtnClick = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: name,
                    email: email,
                    password: pass,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const loginDate = new Date().toISOString();
                localStorage.setItem('user', JSON.stringify({ name, email, loginDate }));
                localStorage.setItem('token', data.token);
                navigate("/profile");
            } else {
                console.error('Ошибка входа:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка входа:', error);
        }
    };

    return (
        <div className="font-poppins bg-sky-50 w-dvh h-dvh flex flex-col items-center justify-center text-2xl gap-8">
            <input
                type='text'
                value={name}
                onChange={onNameChange}
                placeholder='Введите ваш никнейм'
                className='grow-0 shrink- border border-solid border-black rounded mr-3 p-2'
            />
            <input
                type='text'
                value={email}
                onChange={onEmailChange}
                placeholder='Введите вашу почту'
                className='grow-0 shrink- border border-solid border-black rounded mr-3 p-2'
            />
            <input
                type='password'
                value={pass}
                onChange={onPassChange}
                placeholder='Введите ваш пароль'
                className='grow-0 shrink-0 border border-solid border-black rounded mr-3 p-2'
            />
            <button
                onClick={onBtnClick}
                className='grow-0 shrink- border border-solid border-black rounded mr-3 p-2 hover:bg-gray-200 hover:duration-200'
                type='button'
            >
                Войти в учетную запись
            </button>
            <Link to='/register' className='hover:text-gray-500 hover:duration-200'>Ещё нет аккаунта? Создайте его!</Link>
        </div>
    );
}

export default Login;
