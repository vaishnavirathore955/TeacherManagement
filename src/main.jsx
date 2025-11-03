// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx'
// import Header from './component/Header.jsx'
// import AboutSection from './component/Aboutusbanner.jsx'
// import FeaturesSection from './component/Whatweoffer.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     {/* <Header/>
//     <AboutSection/>
//     <FeaturesSection/> */}
//   </StrictMode>,
// )

// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './App.jsx';
import './index.css'; // if you're using Tailwind or other styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
