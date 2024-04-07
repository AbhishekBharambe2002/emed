import './App.css'; 

import Navbar from './Navbar';
import LoginPage from './LoginPage';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import About from './About';
import Registration from './Registration';
import Feedback from './Feedback';
import Doctor from './Doctor';
import DoctorReg from './DoctorReg';
import DocNavbar from './DocNavbar';
import Prescription from './Prescription';
import Buy from './Buy';
import DocPrescription from './DocPrescription';
import ContactUs from './ContactUs';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (  
    <>
    <div className='full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Registration" element={<Navbar />}/>
          <Route path="/productlist" element={<Navbar/>}/>
          <Route path='/buy' element={<Navbar/>}/>
          <Route path='/prescription' element={<Navbar/>}/>
          <Route path="/doctor" element={<DocNavbar />} />
          <Route path="/doctorReg" element={<DocNavbar />} />
          <Route path='/docprescription' element={<DocNavbar/>}/>
          <Route path='/contact' element={<Navbar/>}/>
        </Routes>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/productlist" element={<div><SearchBar setSearchTerm={setSearchTerm} /><ProductList searchTerm={searchTerm} /></div>} />
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/doctorReg" element={<DoctorReg/>}/>
          <Route path='/prescription' element={<Prescription/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/docprescription' element={<DocPrescription/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
