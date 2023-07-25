import React from 'react';

const Dashboard = () => {
  // Sample data for the dashboard
  const totalProjects = 10;
  const totalTasks = 25;
  const completedTasks = 12;
  const projectProgress = (completedTasks / totalTasks) * 100;

  return (
    <section className="overview">
      <h3>Overview</h3>
      <p>Total Projects: <span>{totalProjects}</span></p>
      <p>Total Tasks: <span>{totalTasks}</span></p>
      <p>Completed Tasks: <span>{completedTasks}</span></p>
      <div className="project-progress">
        <div className="progress-bar" style={{ width: `${projectProgress}%` }}></div>
      </div>
      <p className="progress">Project Progress: <span>{projectProgress}%</span></p>
    </section>
  );
};

export default Dashboard;
