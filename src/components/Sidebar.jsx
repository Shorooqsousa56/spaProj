
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (

        <div className="sidebar">
            <nav>

                <NavLink to="/dashboard/home" className="nav-link">Home</NavLink>
                <NavLink to="/dashboard/projects" className="nav-link">Projects</NavLink>
                <NavLink to="/dashboard/tasks" className="nav-link">Tasks</NavLink>
                <NavLink to="/dashboard/chat" className="nav-link">Chat</NavLink>


            </nav>
        </div>


    )



}

export default Sidebar;