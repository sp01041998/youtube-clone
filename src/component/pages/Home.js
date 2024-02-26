import React, { useEffect, useState } from 'react'
import Header from '../section/Header'
import Body from '../section/Body'
import { useDispatch, useSelector } from "react-redux";
import { isMobileViewScreen , isSidebarOpen} from "../../util/appstore/userSlice";



const Home = () => {
  const isSidebar = useSelector(store => store.user.isSidebarOpen)
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth <= 1024) {
        dispatch(isMobileViewScreen(true));
      }
      if (window.innerWidth > 1024) {
        dispatch(isMobileViewScreen(false));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleSidebar() {
    dispatch(isSidebarOpen(!isSidebar))
    return
  }
  return (
    <div>
        <Header toggleSidebar={toggleSidebar}/>
        <Body/>
    </div>
  )
}

export default Home