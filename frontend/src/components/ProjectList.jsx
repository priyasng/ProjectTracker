import React, { useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [task, setTask] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('all');

  const handleProjectSubmit = (event) => {
    event.preventDefault();

    if (projectName.trim() === '' || task.trim() === '') {
      alert('Please fill out all the fields.');
      return;
    }

    const newProject = {
      name: projectName,
      tasks: [task],
    };

    setProjects([...projects, newProject]);
    setProjectName('');
    setTask('');
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  const filteredProjects = filterCriteria === 'all'
    ? projects
    : projects.filter((project) => {
        // Apply the filtering logic based on the selected criteria
        // Example: Filter projects based on the project's status
        if (filterCriteria === 'completed' && !project.completed) {
          return false;
        }
        if (filterCriteria === 'pending' && project.completed) {
          return false;
        }
        return true;
      });

  return (
    <div>
      <h2>Projects</h2>
      <select value={filterCriteria} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <ul>
        {filteredProjects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <ul>
              {project.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <form onSubmit={handleProjectSubmit}>
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
          required
        />

        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          required
        />

        <button type="submit">Add Project and Task</button>
      </form>
    </div>
  );
};

export default ProjectList;
