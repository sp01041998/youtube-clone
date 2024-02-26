import React from 'react'
import { formatDate, viewCount } from '../../util/helper'
import { useSelector } from 'react-redux'

const VideoCard = ({videoData}) => {
    const {snippet, statistics} = videoData || {}
    const isSidebarOpen = useSelector(store => store.user.isSidebarOpen)
    const isMobileView = useSelector(store => store.user.isMobileView)
    const style = !isSidebarOpen ? {"width" :'15rem'} : {"width" :'23rem'}
    if(!videoData || !Object.keys(videoData).length){
        return
    }
    console.log({snippet})

    if(isMobileView){
        return (
            <div className={`rounded-lg overflow-hidden w-full`}>
                <img
                    src = {snippet.thumbnails?.maxres?.url}
                    alt= 'thumbnail'
                    className="h-auton rounded-2xl"
                />
                <div className='font-sans px-2 py-2 w'>
                    <p className="text-base font-bold text-wrap line-clamp-2">{snippet?.title}</p>
                    <p className="text-sm font-medium mt-1 mb-1">{snippet.channelTitle}</p>
                    <div className='flex text-sm font-medium items-start'>
                        <p className="">{viewCount(statistics.viewCount)} views</p>
                        <p className='mx-2'>∙</p>
                        <p>{formatDate(snippet.publishedAt)}</p>
                    </div>
                </div>
            </div>
          )
    }

  return (
    <div style={style}>
        <img
            src = {isSidebarOpen ? snippet.thumbnails?.high.url : snippet?.thumbnails?.standard?.url}
            alt= 'thumbnail'
            className="h-auto rounded-2xl"
        />
        <div className='font-sans px-2 py-2 w'>
            <p className="text-base font-bold text-wrap line-clamp-2">{snippet?.title}</p>
            <p className="text-sm font-medium mt-1 mb-1">{snippet.channelTitle}</p>
            <div className='flex text-sm font-medium items-start'>
                <p className="">{viewCount(statistics.viewCount)} views</p>
                <p className='mx-2'>∙</p>
                <p>{formatDate(snippet.publishedAt)}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard