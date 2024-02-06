import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Outlet";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
