import React from "react";

import Login from "./pages/Login";
import Main from "./pages/Main"
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Main" element={<Main />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Landing" element={<Landing />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>

  )
}

export default App
