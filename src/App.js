import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import ApplicationForm from "./Pages/ApplicationForm";
import ContactUs from "./Pages/ContactUs";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import StudentData from "./Pages/StudentData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/aboutUs"} element={<AboutUs />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path={"/studentdata"} element={<StudentData />} />
          <Route path={"/contactUs"} element={<ContactUs />} />
          <Route path={"applicationForm"} element={<ApplicationForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
