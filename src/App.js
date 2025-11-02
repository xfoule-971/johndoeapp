import Navigation from "./components/Navigation.js";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Portofolio from "./pages/Portofolio.jsx";
import Contact from "./pages/Contact.jsx";
import Mentionslegales from "./pages/Mentionslegales.jsx";


const App = () =>{
    return(
        <div>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/portofolio" element={<Portofolio />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/mentionslegales" element={<Mentionslegales />}></Route>
            </Routes>
        </div>
    )
}

export default App;
