import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route here
import './Projects.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Home from './Home';
import Projects from './Projects';
import Tasks from './Tasks';
import Chat from './Chat';

const Dashboard = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main >
                <Routes>

                    <Route path="home" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="chat" element={<Chat />} />
                </Routes>
            </main>
        </>
    );
};

export default Dashboard;
