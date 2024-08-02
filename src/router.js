import { Routes, Route } from "react-router-dom";
import Connexion from "./Pages/Connexion/Connexion";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import LostPassword from "./Pages/LostPassword/LostPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Home from "./Pages/Home/Home";
import QuizAvailable from "./Pages/QuizAvailable/QuizAvailable";
import Admin from "./Pages/Admin/Admin";
import LegalNotice from "./Pages/LegalNotice/LegalNotice";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import MyQuiz from "./Pages/MyQuiz/MyQuiz";
import Profil from "./Pages/Profil/Profil";
import Deconnexion from "./Pages/Deconnexion/Deconnexion";
import NewQuiz from "./Pages/NewQuiz/NewQuiz";

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
            <Route path="/deconnexion" element={<Deconnexion />}/> */
            <Route path="/nouveau-quiz" element={<NewQuiz />}/> */
            <Route path="/administration" element={<Admin />}/>
            <Route path="/mentions-legales" element={<LegalNotice />}/>
            <Route path="politique-de-confidentialite" element={<PrivacyPolicy />}/>
        </Routes>
    )
}