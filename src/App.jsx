import React from "react";
import Login from "./pages/Login";
import Main from "./pages/Main"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Main" element={<Main />}/>
      </Routes>
    </Router>

  )
}

export default App
