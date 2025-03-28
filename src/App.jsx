import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Laboratorna_1 from "./pages/Laboratorna_1.jsx";
import Laboratorna_2 from "./pages/Laboratorna_2.jsx";
import Laboratorna_3 from "./pages/Laboratorna_3/Laboratorna_3.jsx";
import Laboratorna_4 from "./pages/Laboratorna_4.jsx";
import Laboratorna_5 from "./pages/Laboratorna_5.jsx";
import Laboratorna_6 from "./pages/Laboratorna_6.jsx";
import Laboratorna_7 from "./pages/Laboratorna_7.jsx";
import Laboratorna_8 from "./pages/Laboratorna_8.jsx";
import Laboratorna_9 from "./pages/Laboratorna_9.jsx";
import MainText from "./components/MainText.jsx";



const MyComponent = () => {
    return (
        <Router>
            <div className='px-2 sm:px-[2vw] md:px-[2vw] lg:px-[2vw]'>
                <MainText/>
                <Navigation/>
                <Routes>
                    <Route path="/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/l1" element={<Laboratorna_1/>} />
                    <Route path="/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/l2" element={<Laboratorna_2/>} />
                    <Route path="/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/l3" element={<Laboratorna_3/>} />
                    <Route path="/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/l4" element={<Laboratorna_4/>} />
                    <Route path="/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/l5" element={<Laboratorna_5/>} />
                    <Route path="/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/l6" element={<Laboratorna_6/>} />
                    <Route path="/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/l7" element={<Laboratorna_7/>} />
                    <Route path="/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/l8" element={<Laboratorna_8/>} />
                    <Route path="/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/l9" element={<Laboratorna_9/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default MyComponent;