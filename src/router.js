import { Routes, Route } from "react-router-dom";
import Connexion from "./Pages/Connexion/Connexion";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import LostPassword from "./Pages/LostPassword/LostPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Home from "./Pages/Home/Home";
import QuizAvailable from "./Pages/QuizAvailable/QuizAvailable";
import MyQuiz from "./Pages/MyQuiz/MyQuiz";
import Profil from "./Pages/Profil/Profil";
import Administration from "./Pages/Administration/Administration";
import Mentions from "./Pages/Mentions/Mentions";
import Politique from "./Pages/Politique.jsx/Politique";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Connexion />}/>
            <Route path="/inscription" element={<CreateAccount />}/>
            <Route path="/mot-de-passe-oublie" element={<LostPassword />}/>
            <Route path="/reinitialiser-le-mot-de-passe" element={<ResetPassword />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/quiz-disponibles" element={<QuizAvailable />}/>
            <Route path="/mes-quiz" element={<MyQuiz />}/>
            <Route path="/profil" element={<Profil />}/>
            <Route path="/administration" element={<Administration />}/>
            <Route path="/mentions-legales" element={<Mentions />}/>
            <Route path="/politique-de-confidentialite" element={<Politique />}/>
        </Routes>
    )
}