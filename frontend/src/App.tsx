import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.tsx";
import Download from "@/pages/Download.tsx";
import Notfound from "@/pages/Notfound.tsx";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import Login from "@/pages/Login.tsx";
import Register from "@/pages/Register.tsx";
import Posts from "@/pages/Posts.tsx";
import Profile from "@/pages/Profile.tsx";
import Loading from "@/pages/Loading.tsx";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState(location.pathname);

    useEffect(() => {
        if (location.pathname !== prevLocation) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
                setPrevLocation(location.pathname);
            }, 1000); // Set loading time as per your requirement
            return () => clearTimeout(timer);
        }
    }, [location.pathname, prevLocation]);

    return (
        <main className="h-dvh font flex flex-col justify-between font-poppins">
            <Navbar />
            {isLoading ? (
                <Loading />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="*" element={<Notfound />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            )}
            <Footer />
        </main>
    );
}

export default App;
