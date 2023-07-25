
const express = require('express');
const app = express();  //local server created 

const cors = require('cors'); //refrening to all dependencies to the varables
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');// connecting db
connectDB();

// Import routes for retrieving and adding project and task
const project = require('./routes/project');
const task = require('./routes/task');



//app.use har incoming request ki liye chalta hain chahe wo request get post put patch anything
app.use(cors());

// Middleware
app.use(express.json());
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb",parameterLimit : 100000, extended : true}));

dotEnv.config({path:"./.env"})



// Routes for adding projects and tasks
app.use('/api/project', project);
app.use('/api/task', task);



// Start the server
const port =process.env.PORT || 3000; //for dynamic port
app.listen(port, () => {
  console.log('Server is listening on port 3000');
});
