import React from 'react';

import SidebarFilters from '../component/SidebarFilters'
import Footer from '../pages/Footer'
import Sidebarbreadcrumb from '../component/Sidebarbreadcrumb';
import SearchBar from '../component/topbar'




export default function Teacher () {
  return (
    <div>
      <Sidebarbreadcrumb />
      {/* <SearchBar/> */}
      <SidebarFilters />
       
        
        <Footer/>
  
    </div>
  );
}