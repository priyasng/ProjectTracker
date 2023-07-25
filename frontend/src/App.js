import React from 'react';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import AddForm from './components/AddForm';
import ProjectList from './components/ProjectList';
import './styles.css';

function App() {
  return (
    <>
      <header>
        <h1>Project Tracker </h1>
      </header>

      <NavigationBar />

      <main>
        <Dashboard />
        <br/>
        <ProjectList />
        <br/>
        <AddForm />
        <br/>
      </main>

      <footer>
        <p>&copy; 2023 Software Development Solutions Company</p>
      </footer>
    </>
  );
}

export default App;
