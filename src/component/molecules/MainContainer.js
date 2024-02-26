import React from 'react'
import { useSelector } from 'react-redux';
import { mostSearchedCategory } from '../constant';
import VideoContainers from '../section/VideoContainers';

const MainContainer = () => {
  const isSidebarOpen = useSelector((store) => store?.user?.isSidebarOpen);
  const isMobileViewScreen = useSelector((store) => store?.user?.isMobileView)
  if(isMobileViewScreen){
    return (
      <div className= "pt-2 col-span-12">
        <div className='flex gap-4 pb-4 z-20 overflow-x-auto fixed w-full bg-white opacity-100 px-4 py-2 no-scrollbar'>
          {mostSearchedCategory.map((category, index) => (
            <button className='border px-2 py-1 rounded-md' key={index}>
              {category}
            </button>
          ))}
        </div>
        <div className='pt-16 px-4'>
          <VideoContainers/>
        </div>
  
      </div>
    )
  }

  return (
    <div className= {`pt-4 ${isSidebarOpen ? "col-span-10" : "col-span-11"}`}>
      <div className='flex gap-4 pb-4 z-20 overflow-x-auto fixed w-full bg-white opacity-100 px-4 py-2 no-scrollbar'>
        {mostSearchedCategory.map((category, index) => (
          <button className='border px-2 py-1 rounded-md' key={index}>
            {category}
          </button>
        ))}
      </div>
      <div className='pt-16 px-4'>
        <VideoContainers/>
      </div>

    </div>
  )
}

export default MainContainer