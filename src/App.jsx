import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import "./App.css";
import "./general.css";
import Nav from "./components/nav";
import Index from "./pages/index";
import About from "./pages/about";
import Courses from "./pages/courses";
import Contact from "./pages/contact";
import SignInPage from "./pages/account/signIn";
import EnrollPage from "./pages/account/enroll";
import Footer from "./components/footer";
import HtmlAndCssPage from "./components/courses components/programs/programPages/htmlAndCssPage";
import JavascriptPage from "./components/courses components/programs/programPages/javascriptPage";
import ReactPage from "./components/courses components/programs/programPages/reactJsPage";
import NodePage from "./components/courses components/programs/programPages/nodePage";
import DsaPage from "./components/courses components/programs/programPages/dsaPage";
import JavaPage from "./components/courses components/programs/programPages/javaPage";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route
            path="/programs/programPages/htmlAndCssPage"
            element={<HtmlAndCssPage />}
          />
          <Route
            path="/programs/programPages/javascriptPage"
            element={<JavascriptPage />}
          />
          <Route
            path="/programs/programPages/reactJsPage"
            element={<ReactPage />}
          />
          <Route
            path="/programs/programPages/nodePage"
            element={<NodePage />}
          />
          <Route path="/programs/programPages/dsaPage" element={<DsaPage />} />
          <Route
            path="/programs/programPages/javaPage"
            element={<JavaPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
