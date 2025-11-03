// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../component/HeroSection'
import AboutUs from '../component/Heroabout'
import FeatureSection from '../component/Herofeature'
import InstructorSection from '../component/Meetinstructor'
import Newsletter from '../component/Newsletter'
import AboutSection from '../component/Whychooseus';
import Footer from '../pages/Footer'


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs/>
      <InstructorSection />
      <FeatureSection/>
     
      <AboutSection />
       <Newsletter />
      
      <Footer/>
  
    </div>
  );
}
