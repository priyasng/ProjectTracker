const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

//retrieve all the task
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    console.error('Failed to retrieve tasks:', error);
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
});

//add all the task
router.post('/', async (req, res) => {
  try {
    const task = req.body;
    const createdTask = await Task.create(task);
    res.json(createdTask);
  } catch (error) {
    console.error('Failed to add task:', error);
    res.status(500).json({ error: 'Failed to add task' });
  }
});

module.exports = router;
