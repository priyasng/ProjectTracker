const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

//get all the project
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.error('Failed to retrieve projects:', error);
    res.status(500).json({ error: 'Failed to retrieve projects' });
  }
});

//add all the project
router.post('/', async (req, res) => {
  try {
    const project = req.body;
    const createdProject = await Project.create(project);
    res.json(createdProject);
  } catch (error) {
    console.error('Failed to add project:', error);
    res.status(500).json({ error: 'Failed to add project' });
  }
});

module.exports = router;
