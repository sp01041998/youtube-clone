import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from '../molecules/MainContainer'
import { useSelector } from 'react-redux';
import Footer from './Footer';

const Body = () => {
  const isMobileView = useSelector((store) => store?.user?.isMobileView);
  return (
    <div className='grid grid-cols-12 pt-12'>
      {!isMobileView && <Sidebar />}
      <MainContainer/>
      {isMobileView && <Footer/>}
    </div>
  )
}

export default Body