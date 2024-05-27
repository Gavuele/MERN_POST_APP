
import { Button } from "@/entities/ui/button.tsx";
import {Link} from "react-router-dom";

function Profile() {
    // Предположим, что информация о пользователе хранится в локальном хранилище под ключом 'user'
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isAuth = localStorage.getItem('token') !== null;
    return (
        <div>
            {isAuth ? (
                <div className='h-full flex flex-col items-center justify-center text-xl'>
                    <h2 className='text-2xl mb-16'>
                        Профиль пользователя
                    </h2>
                    <div className='flex flex-row gap-16 items-center '>
                        <div>
                            <img alt='dsdsd ' src='/images/bg.jpg'/>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <p>
                                {user.name} {/* Имя пользователя */}
                            </p>
                            <Button variant='started' size='lg'>
                                <Link to='/login'>
                                    Войти в другой аккаунт
                                </Link>
                            </Button>
                            <p>Описание профиля</p>
                        </div>
                    </div>
                    <h2 className='text-2xl mt-10'>Данные аккаунта</h2>
                    <div className='flex flex-col gap-4 mt-8'>
                        <p>
                            Почта: {user.email} {/* Почта пользователя */}
                        </p>
                        <p>
                            Пароль: ********** <Button variant='started'>Поменять пароль</Button>
                        </p>
                        <p>
                            Дата регистрации: {user.registerDate } <br/>{/* Дата регистрации пользователя */}
                            Дата последнего входа: {user.loginDate } {/* Дата регистрации пользователя */}
                        </p>
                    </div>
                </div>
            ) : (
                <p>
                    Войдите в систему
                </p>
                )}
        </div>

    )
}

export default Profile;
