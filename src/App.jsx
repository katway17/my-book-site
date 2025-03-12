import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Goodreads from "./pages/Goodreads";
import Instagram from "./pages/Instagram";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/home.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goodreads" element={<Goodreads />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/book/:title" element={<BookDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



