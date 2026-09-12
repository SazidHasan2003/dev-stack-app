import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TechCatalog from "./component/TechCatalog";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Hero />
      <TechCatalog />
      <Footer />
    </>
  );
}

export default App;
