const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config()

const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} = require('./controllers/todoController')

//App config
const app = express();
const port = process.env.PORT || 8000
const connectionURL = process.env.MONGO_URI

//Middleware
//convert to json
app.use(express.json())
app.use(Cors({ 
  origin: "http://localhost:5173", // Allow frontend access
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true 
}));

//DB Config
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
      console.log(`MongoDB connected`);
      app.listen(port, () => console.log(`Running on port: ${port}`));
  })
  .catch((err) => {
      console.error("DB Connection Error: ", err);
  });
  

//API Endpoints
//Get todos list
app.get('/todos',getTodos)

//Create a new Todo
app.post('/todos',createTodo)

//Update a Todo
app.put('/todos/:id',updateTodo)

//Delete a Todo
app.delete('/todos/:id',deleteTodo)