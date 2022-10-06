import About from "./componets/About";
import Contact from "./componets/Contact";
import Home from "./componets/Home";
import CssBaseline from "@mui/material/CssBaseline";
// import { Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      <About />
      {/* <Contact /> */}
    </>
  );
}

export default App;
