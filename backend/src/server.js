import { supabase } from './supabaseClient.js';
const express = require('express');
const cors = require('cors');
const hospitalsRouter = require('./routes/hospitals');
const hospitalsLoginRouter = require('./routes/hospitalsLogin');
const patientsRouter = require('./routes/patients'); // ✅ single patients router
const patientsLoginRouter = require('./routes/patientsLogin'); 
const sendEmailRoute = require("./routes/sendEmail");

const app = express();
app.use(cors());
app.use(express.json());

// Patients routes
app.use("/api", sendEmailRoute);
app.use('/api/patients', patientsRouter);
app.use('/api/patients', patientsLoginRouter);
// Hospitals routes
app.use('/api/hospitals', hospitalsRouter);
app.use('/api/hospitals', hospitalsLoginRouter);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
