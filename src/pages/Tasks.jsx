import { useState } from "react";

const Tasks = () => {
  const [showModal, setShowModal] = useState(false); // Step 1

  const newTask = () => {
    setShowModal(true); // Step 2: Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Optional: Close the modal
  };

  const [tasks, setTasks] = useState([
    { id: 1, project: "Website Redesign", name: "Design Homepage", description: "Create a responsive design for the homepage.", student: "Ali Yaseen", status: "In Progress", due: "2023-04-22" },
    { id: 2, project: "Website Redesign", name: "Develop API", description: "Set up the backend API for the project.", student: "Braa Aeesh", status: "Completed", due: "2023-01-16" },
    { id: 3, project: "Mobile App Development", name: "Write Documentation", description: "Document the project setup and usage.", student: "Ibn Al-Jawzee", status: "Pending", due: "2023-03-15" },
    { id: 4, project: "Mobile App Development", name: "Testing", description: "Conduct testing for all features.", student: "Ibn Malik", status: "In Progress", due: "2023-11-29" },
    { id: 5, project: "E-commerce Platform", name: "Deploy Application", description: "Deploy the application to the production server.", student: "Ayman Outom", status: "Pending", due: "2023-03-24" }
  ]);


  // FOR BACKEND
  //   useEffect(() => {
  //   fetch("/api/tasks")
  //     .then(res => res.json())
  //     .then(data => setTasks(data));
  // }, []);    


  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      {/* Task Header */}
      <div className="flex justify-between items-center mb-6 w-full max-w-6xl">
        <div className="flex items-center gap-2">
          <label htmlFor="sort">Sort By:</label>
          <select
            id="sort"
            className="px-3 py-2 rounded bg-[#2c2f33] text-white outline-none border border-zinc-700"
          >
            <option value="status">Task Status</option>
            <option value="project">Project</option>
            <option value="date">Due Date</option>
            <option value="student">Assigned Student</option>
          </select>
        </div>
        <button onClick={newTask} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create a New Task
        </button>
      </div>

      {/* Table */}
      <div className="rounded-lg shadow-lg shadow-sm shadow-zinc-950 overflow-x-auto w-full max-w-6xl bg-zinc-850">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="border-b-2 border-zinc-700">
            <tr>
              <th className="p-3">Task ID</th>
              <th className="p-3">Project</th>
              <th className="p-3">Task Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Assigned Student</th>
              <th className="p-3">Status</th>
              <th className="p-3">Due Date</th>
            </tr>
          </thead>
          <tbody id="task-list">
           {tasks.map(task => (
        <tr key={task.id} className="border-b border-zinc-700 hover:bg-zinc-800">
          <td className="p-3">{task.id}</td>
          <td className="p-3">{task.project}</td>
          <td className="p-3">{task.name}</td>
          <td className="p-3">{task.description}</td>
          <td className="p-3">{task.student}</td>
          <td className="p-3">{task.status}</td>
          <td className="p-3">{task.due}</td>
        </tr>
      ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal - show if state is true */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-[#1e1e1e] border border-[#444] p-6 rounded-lg w-[500px] max-w-full relative">
            <span
              className="absolute top-2 right-4 text-2xl text-gray-400 cursor-pointer hover:text-white"
              onClick={closeModal}
            >
              &times;
            </span>
            <h2 className="text-blue-500 text-lg font-semibold mb-4">Create New Task</h2>

            {/* Form content remains unchanged */}
<form
            id="task-form"
            className="flex flex-col gap-4 text-white w-full max-w-md mx-auto"
          >
            <div>
              <label htmlFor="project">Project:</label>
              <select
                id="project"
                name="project"
                className="w-full bg-[#444] text-white p-2 rounded mt-1"
                defaultValue=""
              >
                <option value="" disabled>Select a project</option>
              </select>
            </div>

            <div>
              <label htmlFor="task-name">Task Name:</label>
              <input
                type="text"
                id="task-name"
                name="task-name"
                className="w-full bg-[#444] text-white p-2 rounded mt-1"
              />
            </div>

            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                className="w-full bg-[#444] text-white p-2 rounded mt-1"
              />
            </div>

            <div>
              <label htmlFor="assigned-student">Assigned Student:</label>
              <select
                id="assigned-student"
                name="assigned-student"
                disabled
                className="w-full bg-[#444] text-white p-2 rounded mt-1"
                defaultValue=""
              >
                <option value="" disabled>Select a student</option>
              </select>
            </div>

            <div>
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                name="status"
                className="w-full bg-[#444] text-white p-2 rounded mt-1"
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label htmlFor="due-date">Due Date:</label>
              <input
                type="date"
                id="due-date"
                name="due-date"
                className="w-full bg-[#444] text-white p-2 rounded mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded mt-4"
            >
              Add Task
            </button>
          </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
