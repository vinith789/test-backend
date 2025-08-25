const express = require('express');
const path = require("path");
const cors = require("cors");


const app = express();

// Middleware to parse form data
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send("Server running");
});


// **Route to handle form submission must be BEFORE 404**
app.post('/submit', (req, res) => {
  console.log("Form Data Received:", req.body); // ✅ Prints in console
  res.send("Form submitted successfully! Check console.");
});

// 404 page (should be LAST)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "pagenotfound.html"));
});

app.listen(3000, () => {
  console.log("Express server is running at http://localhost:3000");
});
