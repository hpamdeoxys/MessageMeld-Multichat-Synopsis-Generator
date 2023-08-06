import React from "react";
import Navbar from "./components/navbar";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<><Navbar /><Form/></>} />
        <Route path="/bulleter" element={<><Navbar /><Form2/></>} />
        <Route path="/custom" element={<><Navbar /><Form3/></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
