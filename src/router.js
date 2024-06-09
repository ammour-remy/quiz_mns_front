import { Routes, Route } from "react-router-dom";
import Connexion from "./Pages/Connexion/Connexion";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import LostPassword from "./Pages/LostPassword/LostPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Home from "./Pages/Home/Home";
import QuizAvailable from "./Pages/QuizAvailable/QuizAvailable";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Connexion />}/>
            <Route path="/inscription" element={<CreateAccount />}/>
            <Route path="/mot-de-passe-oublie" element={<LostPassword />}/>
            <Route path="/reinitialiser-le-mot-de-passe" element={<ResetPassword />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/quiz-disponibles" element={<QuizAvailable />}/>
        </Routes>
    )
}