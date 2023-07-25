const mongoose = require('mongoose');

// Define the project schema blueprint
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

// Create the project model
const Project = mongoose.model('Project', projectSchema);

// Export the project model
module.exports = Project;
