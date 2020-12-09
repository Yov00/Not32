const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cors());

app.use(express.json());

// Routes
app.use('/api/todos',require('./routes/todos_route'));

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})