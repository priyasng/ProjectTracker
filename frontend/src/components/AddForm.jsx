import React, { useState } from 'react';

const AddForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Add your logic to handle the form submission
    // For example, you can create a new project or task using the form data
    
    // Reset the form fields
    setProjectName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="projectName">Project/Task Name:</label>
        <input type="text" id="projectName" name="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </div>
      <div>
        <label htmlFor="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      </div>
      {/* Add more form elements as needed */}
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
