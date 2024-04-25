import './App.css'; 

import Navbar from './Navbar';
import LoginPage from './LoginPage';
import ProductList from './ProductList';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
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
import PreNavbar from './PreNavbar';
import PreDocNavbar from './PreDocNavbar';
import DoctorInfo from './DoctorInfo';

function App() {

  return (  
    <>
    <div className='full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PreNavbar />} />
          <Route path="/Registration" element={<PreNavbar />}/>
          <Route path="/productlist" element={<Navbar/>}/>
          <Route path='/buy' element={<Navbar/>}/>
          <Route path='/prescription' element={<Navbar/>}/>
          <Route path="/doctor" element={<PreDocNavbar/>} />
          <Route path="/doctorReg" element={<PreDocNavbar />} />
          <Route path='/docprescription' element={<DocNavbar/>}/>
          <Route path='/contact' element={<Navbar/>}/>
          <Route path='/doctorinfo' element={<Navbar/>}/>
          <Route path="/About" element={<Navbar />} />
        </Routes>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/productlist" element = {<ProductList/>} />
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/doctorReg" element={<DoctorReg/>}/>
          <Route path='/prescription' element={<Prescription/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/docprescription' element={<DocPrescription/>}/>
          <Route path='/doctorinfo' element={<DoctorInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
