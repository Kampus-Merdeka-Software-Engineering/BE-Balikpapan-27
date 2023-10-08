require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//import Routes
const { appointmentRoutes } = require('./routes/appointmentRoutes');
const { blogRoutes } = require('./routes/blogRoutes');
const { doctorRoutes } = require('./routes/doctorRoutes');
const { teamRoutes } = require('./routes/teamRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/appointment', appointmentRoutes)
app.use('/blog', blogRoutes)
app.use('/doctor', doctorRoutes)
app.use('/team', teamRoutes)

//listen port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});