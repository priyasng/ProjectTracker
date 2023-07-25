import React from 'react';
import Task from './Task';

const Project = ({ project }) => {
  return (
    <li>
      <h3>{project.name}</h3>
      <ul>
        {project.tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
    </li>
  );
};

export default Project;
