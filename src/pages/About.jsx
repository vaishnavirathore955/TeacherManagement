import React from 'react';
import AboutSection from '../component/Aboutusbanner';
import FeaturesSection from '../component/Whatweoffer'
import EducationSection from '../component/Mission'
import Aboutbreadcrumb from '../component/Aboutbreadcrumb'
import Footer from '../pages/Footer'
import Whywestarted from '../component/Whywestarted'
import Quality from '../component/Quality'


export default function About() {
  return (
    <div>
      <Aboutbreadcrumb/>
      <AboutSection/>
      <Whywestarted/>
      <EducationSection/>
      
      <FeaturesSection/>
      <Quality/>
      
      <Footer/>
  
    </div>
  );
}