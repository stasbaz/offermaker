import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Main from "./pages/Main/Main";
import Benefits from "./pages/Benefits/Benefits";
import YouStart from "./pages/YouStart/YouStart";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Reviews from "./pages/Reviews/Reviews";
import Form from "./pages/Form/Form";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <Main />

      <Benefits />

      <YouStart />

      <HowItWorks />

      <Reviews />

      <Form />

      <Footer />
    </div>
  );
}

export default App;
