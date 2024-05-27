import {Button} from "@/entities/ui/button.tsx";
import {FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import {LuFramer} from "react-icons/lu";
import {SiAxios, SiExpress, SiVercel} from "react-icons/si";
import {DiMongodb} from "react-icons/di";


function Home() {


    return (
        <main className="flex items-center justify-center flex-col ">
            <div className="h-full flex justify-center items-center gap-56">
                <div className="flex flex-col gap-10">
                    <h1 className='text-5xl'>Добро пожаловать к странице проекта</h1>
                    <p className='text-2xl'>
                        Данное пет-приложение включает в себя:
                    </p>
                    <p> <ul className='ml-4'>
                            <li>Анимации Framer-Motion</li>
                            <li>Продвинутая верстра Tailwind</li>
                            <li>Система регистрации JWT/BCRYPT</li>
                            <li>Компонентный подход React</li>
                            <li>Бекенд запрсы на express</li>
                        </ul>
                    </p>
                    <Button variant='started' size='lg'
                    className='w-1/3'
                    >Start</Button>
                </div>
                <div>
                    <img src='/images/bg.jpg' alt='dadsa'/>
                </div>
            </div>
            <ul className='text-2xl grid w-2/3 grid-cols-4 gap-4 justify-around mt-28'>
                <li><span
                className='flex gap-4 justify-center items-center'><FaReact size={50} className='text-sky-400' />Tailwind</span></li>
                <li><span
                className='flex gap-4 justify-center items-center'><RiTailwindCssFill size={50} className='text-emerald-600' />React</span></li>
                <li><span
                className='flex gap-4 justify-center items-center'><LuFramer size={50} className='text-gray-500'/>Zustand</span></li>
                <li><span
                className='flex gap-4 justify-center items-center'><LuFramer size={50} className='text-orange-300'/>Framer</span></li>
                <li><span
                className='flex gap-4 justify-center items-center'><SiExpress size={50} className='text-gray-500'/>Express</span></li>
                <li><span
                className='flex gap-4 justify-center items-center'><SiAxios size={50} className='text-blue-600'/>Axios</span></li>
                <li><span
                className='flex gap-4 justify-center items-center'><DiMongodb size={50} className='text-emerald-600'/>MongoDB</span></li>
                <li><span
                className='flex gap-4 justify-center items-center'><SiVercel size={50} className='text-gray-800'/>Vercel</span></li>
            </ul>
        </main>
    )
}

export default Home
