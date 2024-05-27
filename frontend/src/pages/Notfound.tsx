import {Button} from "@/entities/ui/button.tsx";
import {Link} from "react-router-dom";


function Notfound() {


    return (
        <div className="font-poppins bg-sky-50 w-dvh h-dvh flex flex-col items-center justify-center text-6xl gap-16">
                <p>Sorry, the page you are looking for does not exist.</p>
            <Link to='/'>
                <Button variant='notfound' size='xl' >Вернуться на главную</Button>
            </Link>


        </div>
    )
}

export default Notfound
