import React from 'react'
import { sidebarLogo } from '../constant'

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full flex flex-row gap-12 py-4 shadow-lg border-t-2 px-6 overflow-scroll z-20 opacity-100 bg-white no-scrollbar'>
        {
            sidebarLogo.map((component) => (
                <div className='cursor-pointer'>
                    {component}
                </div>
            ))
        }
    </div>
  )
}

export default Footer