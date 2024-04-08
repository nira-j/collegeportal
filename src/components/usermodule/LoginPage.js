
import React from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';
import LoginPanel from './LoginPanel.js';
import SignupPanel from './SignupPanel.js';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from '../home/Homepage.js';
import About from '../about/About.js'
import Courses from '../courses/Courses.js'
import LandingPage from '../landingpage/LandingPage.js';
import Examform from '../exammodule/Examform.js';

export default function LoginPage(){
    const [signin, setIssignin]=useState("false");
    const [userdetails, setUserdetails]=useState({});

    return(
        <>
      <Router>
      <Header signin={signin}/>
      <Routes>
        <Route path="/user/examform" element={<Examform setUserdetails={setUserdetails}/>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signin" element={<LoginPanel setUserdetails={setUserdetails} setIssignin={setIssignin} />} />
        <Route path="/signup" element={<SignupPanel />} />
        <Route path="/user/ladingpage" element={<LandingPage userdetails={userdetails}/>} />
      </Routes>
        <Footer />
      </Router>
        </>
    );
}