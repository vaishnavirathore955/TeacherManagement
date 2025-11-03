import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from './pages/Contect';
import Teacher from "./pages/Teacher";
import Service from "./pages/Service";
import Signup from "./component/Register";

import Login from "./component/Login";
import ScrollToTop from "./component/ScrollToTop"




export default function AppRouter() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contacts" element={<Contect/>} />
          <Route path="/teachers" element={<Teacher/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/loginpage" element={<Signup/>} />
          <Route path="/signin" element={<Login/>}/>
          <Route path="/create" element={<Signup/>}/>
        </Routes>
   
    </BrowserRouter>
  );
}