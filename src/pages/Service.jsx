import React from 'react';


import Footer from '../pages/Footer'
import Servicebanner from '../component/Servicehome'
import Servicebreadcrumb from '../component/Servicebreadcrumb';
import Servicecards from '../component/Servicecards'




export default function Service () {
  return (
    <div>
        <Servicebreadcrumb/>
        <Servicebanner />
        <Servicecards />
        <Footer/>
  
    </div>
  );
}