require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();
connectDB();
// routes
const emproute = require('./routes/emproute');
const productroute = require('./routes/productroute');
// connect database


// cors
app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('server is active'));

// use routes
app.use("/api/employee", emproute);
app.use("/api/product",productroute)
// setting up port

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
