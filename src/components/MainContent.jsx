// components/MainContent.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Projects from '../pages/Projects';
import Home from '../pages/Home';


const MainContent = () => {
    return (
        <main className="main-content">
            <Routes>


                <Route path="/Home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </main>
    );
};

export default MainContent;
