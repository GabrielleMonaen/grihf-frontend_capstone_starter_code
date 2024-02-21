const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Install cors package: npm install cors

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your routes and other middleware here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
