import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [pass, setPassword] = useState<string>('');
    const [confirmpass, setConfirmpass] = useState<string>('');

    const registerUser = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/auth/register', {
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
                const registerDate = new Date().toISOString();
                localStorage.setItem('user', JSON.stringify({ name, email, registerDate }));
                navigate("/login");
            } else {
                console.error('Ошибка регистрации:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка регистрации:', error);
        }
    };

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
    const onPassChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const onConfirmPassChange = (event: ChangeEvent<HTMLInputElement>) => setConfirmpass(event.target.value);

    const onBtnClick = () => {
        if (pass !== confirmpass) {
            console.error('Пароли не совпадают');
            return;
        }
        registerUser();
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
                type='email'
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
            <input
                type='password'
                value={confirmpass}
                onChange={onConfirmPassChange}
                placeholder='Подтвердите ваш пароль'
                className='grow-0 shrink- border border-solid border-black rounded mr-3 p-2'
            />
            <button
                onClick={onBtnClick}
                className='grow-0 shrink- border border-solid border-black rounded mr-3 p-2 hover:bg-gray-200 hover:duration-200'
                type='button'
            >
                Создать учетную запись
            </button>
            <Link to='/login' className='hover:text-gray-500 hover:duration-200'>Уже есть аккаунт? Войдите в него</Link>
        </div>
    );
}

export default Register;
