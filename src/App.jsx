import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesWrapper from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Toaster />
      <RoutesWrapper />
      <Footer />
    </Router>
  );
};

export default App;
