const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employees");
const DoctorModel = require('./models/Doctor');
const PrescriptionModel = require('./models/Prescription');
const http = require('http');



const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());



mongoose.connect("mongodb://127.0.0.1:27017/employee");
console.log("database running");

app.post("/", (req, res) => {
  const { username, password } = req.body;
  EmployeeModel.findOne({ password: password })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("no record existed");
      }
    });
});

app.post("/doctor", (req, res) => {
  const { username, password } = req.body;
  DoctorModel.findOne({ password: password })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("no record existed");
      }
    });
});

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});


app.post('/doctorReg', (req, res) => {
 DoctorModel.create(req.body)
    .then(doctor => res.json(doctor))
    .catch(err => res.json(err));
});

app.post('/prescription', async (req, res) => {
  const {Medname, Mednumber,  image } = req.body;
  PrescriptionModel.create({ Medname, Mednumber, image })
    .then((prescription) => res.json(prescription))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.get('/docprescription', async (req, res) => {
  try {
    const prescriptions = await PrescriptionModel.find();
    res.json(prescriptions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


const products = require('./data');

app.get('/productlist', async (req, res) => {
  try {
    res.json({ products });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



server.listen(3001, () => {
  console.log("Server is running");
});
