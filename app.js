//file entrypoint, tempat server API jalan

require('dotenv').config();

const cors = require('cors'); //biar bisa sharing data antar endpoint, atau singkatnya biar datanya bisa nyambung ke FE
const express = require('express');

//import config database
//const { pool } = require('./config/database');

//import Routes
const { mahasiswaRoutes } = require('./routes/mahasiswaRoutes');
// const { appointmentRoutes } = require('./routes/appointmentRoutes');
// const { blogRoutes } = require('./routes/blogRoutes');
// const { doctorRoutes } = require('./routes/doctorRoutes');
// const { teamRoutes } = require('./routes/teamRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", mahasiswaRoutes)

//listen port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});