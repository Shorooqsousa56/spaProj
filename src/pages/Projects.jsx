import React, { useState } from 'react';
import './Projects.css';

const initialStudents = [
    { username: 'john_doe' },
    { username: 'jane_smith' },
    { username: 'mike_jones' }
];

const initialProjects = [
    {
        projectTitle: 'AI Chatbot',
        projectDescription: 'A chatbot using NLP.',
        students: ['john_doe'],
        projectCategory: 'Machine Learning',
        startingDate: '2025-05-01',
        endingDate: '2025-06-01',
        projectStatus: 'In Progress'
    },
    {
        projectTitle: 'React Dashboard',
        projectDescription: 'Admin dashboard in React.',
        students: ['jane_smith'],
        projectCategory: 'Web Development',
        startingDate: '2025-04-15',
        endingDate: '2025-05-30',
        projectStatus: 'Completed'
    }
];

const initialTasks = [
    { id: 1, project: 'AI Chatbot', name: 'Build NLP model', description: 'Create and train NLP model.', student: 'john_doe', status: 'In Progress' },
    { id: 2, project: 'React Dashboard', name: 'Design UI', description: 'Create UI mockups.', student: 'jane_smith', status: 'Completed' },
    { id: 3, project: 'React Dashboard', name: 'UI', description: 'Create UI mockups.', student: 'jane_smith', status: 'Completed' }
];

const Projects = () => {
    const [students] = useState(initialStudents);
    const [projects, setProjects] = useState(initialProjects);
    const [tasks] = useState(initialTasks);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [statusFilter, setStatusFilter] = useState('All Statuses');
    const [searchQuery, setSearchQuery] = useState('');
    const [sidebarProject, setSidebarProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const toggleStudentSelection = (username) => {
        setSelectedStudents((prev) =>
            prev.includes(username) ? prev.filter((u) => u !== username) : [...prev, username]
        );
    };

    const handleSaveProject = () => {
        const title = document.querySelector('.input-title').value;
        const description = document.querySelector('.text-area-description').value;
        const category = document.querySelector('.Select-category').value;
        const startingDate = document.querySelector('.input-starting-date').value;
        const endingDate = document.querySelector('.input-ending-date').value;
        const status = document.querySelector('.select-Status').value;

        if (!title || !description || !category || !startingDate || !endingDate) {
            alert('All fields are required!');
            return;
        }

        if (startingDate >= endingDate) {
            alert('Starting date must be before ending date!');
            return;
        }

        const newProject = {
            projectTitle: title,
            projectDescription: description,
            students: selectedStudents,
            projectCategory: category,
            startingDate,
            endingDate,
            projectStatus: status
        };

        setProjects([...projects, newProject]);
        setShowModal(false);
        setSelectedStudents([]);
    };

    const calculateProgress = (start, end) => {
        const now = new Date();
        const startDate = new Date(start);
        const endDate = new Date(end);
        if (now < startDate) return 0;
        if (now > endDate) return 100;
        return Math.floor(((now - startDate) / (endDate - startDate)) * 100);
    };

    const filteredProjects = projects.filter((p) => {
        const statusMatch = statusFilter === 'All Statuses' || p.projectStatus === statusFilter;
        const searchMatch =
            p.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.projectDescription.toLowerCase().includes(searchQuery.toLowerCase());
        return statusMatch && searchMatch;
    });

    const filteredTasks = (projectTitle) =>
        tasks.filter((task) => task.project === projectTitle);

    return (
        <div className="main-content">
            <div className="mainheader">
                <h2>Projects Overview</h2>
            </div>
            <div className="actions">
                <button className="add-project" onClick={() => setShowModal(true)}>
                    Add New Project
                </button>
                <input
                    className="input-Search-projects"
                    placeholder="Search projects by title or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    id="statusFilter"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option>All Statuses</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>On Hold</option>
                    <option>Cancelled</option>
                </select>
            </div>

            <div className="projects-container">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => setSidebarProject(project)}
                    >
                        <h3 className="title">{project.projectTitle}</h3>
                        <p><strong>Description:</strong> {project.projectDescription}</p>
                        <p><strong>Students:</strong> {project.students.join(', ')}</p>
                        <p><strong>Category:</strong> {project.projectCategory}</p>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: `${calculateProgress(project.startingDate, project.endingDate)}%` }}>
                                {calculateProgress(project.startingDate, project.endingDate)}%
                            </div>
                        </div>
                        <p className="dates">{project.startingDate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {project.endingDate}</p>
                    </div>
                ))}
            </div>

            {sidebarProject && (
                <div id="rightSidebar" className="right-sidebar active">
                    <button onClick={() => setSidebarProject(null)} className="close-btn">×</button>
                    <h2>{sidebarProject.projectTitle}</h2>
                    <p><strong>Description:</strong> {sidebarProject.projectDescription}</p>
                    <p><strong>Category:</strong> {sidebarProject.projectCategory}</p>
                    <p><strong>Students:</strong> {sidebarProject.students.join(', ')}</p>
                    <p><strong>Start Date:</strong> {sidebarProject.startingDate}</p>
                    <p><strong>End Date:</strong> {sidebarProject.endingDate}</p>
                    <h2>Tasks</h2>
                    {filteredTasks(sidebarProject.projectTitle).length > 0 ? (
                        filteredTasks(sidebarProject.projectTitle).map((task) => (
                            <div key={task.id} className="task-detail">
                                <p><strong>Task ID:</strong> {task.id}</p>
                                <p><strong>Task Name:</strong> {task.name}</p>
                                <p><strong>Description:</strong> {task.description}</p>
                                <p><strong>Assigned Student:</strong> {task.student}</p>
                                <p><strong>Status:</strong> {task.status}</p>
                            </div>
                        ))
                    ) : (
                        <p>No tasks found for this project.</p>
                    )}
                </div>
            )}

            {showModal && (
                <div className="container-new-proj">
                    <div className="modal">
                        <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
                        <h2>Add New Project</h2>
                        <label>Project Title:</label>
                        <input type="text" className="input-title" />
                        <label>Project Description:</label>
                        <textarea rows="3" className="text-area-description"></textarea>
                        <label>Students List:</label>
                        <div className="students-list">
                            {students.map((student, index) => (
                                <div
                                    key={index}
                                    className={`student-item ${selectedStudents.includes(student.username) ? 'selected' : ''}`}
                                    onClick={() => toggleStudentSelection(student.username)}
                                >
                                    {student.username}
                                </div>
                            ))}
                        </div>
                        <label>Project Category:</label>
                        <select className="Select-category" defaultValue="Select a category">
                            <option disabled>Select a category</option>
                            <option>Web Development</option>
                            <option>Mobile Development</option>
                            <option>Data Science</option>
                            <option>Machine Learning</option>
                        </select>
                        <label>Starting Date:</label>
                        <input type="date" className="input-starting-date" />
                        <label>Ending Date:</label>
                        <input type="date" className="input-ending-date" />
                        <label>Status:</label>
                        <select className="select-Status" defaultValue="In Progress">
                            <option>In Progress</option>
                            <option>Completed</option>
                            <option>Pending</option>
                            <option>On Hold</option>
                            <option>Cancelled</option>
                        </select>
                        <button className="btn" onClick={handleSaveProject}>Save Project</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
