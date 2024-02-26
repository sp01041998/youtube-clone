import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { mostPopularVideosApi } from '../constant'
import VideoCard from '../molecules/VideoCard'
import { useSelector } from 'react-redux'

const VideoContainers = () => {
    const [popularVideos, setPopularVideos] = useState(null)
    const isSidebarOpen = useSelector(store => store.user.isSidebarOpen)

    useEffect(() => {
        fetchMoviesData()
    }, [])

    async function fetchMoviesData(){
        const data = await axios.get(mostPopularVideosApi)
        if(data?.data?.items){
            console.log(data?.data?.items)
            setPopularVideos(data?.data?.items)
        }
        return
    }
    if(!popularVideos){
        return
    }
  return (
    <div className={`flex flex-row flex-wrap  ${isSidebarOpen ? "gap-8" :  "gap-5"}`}>
        {
            popularVideos?.map((data, index) => (
                <VideoCard videoData = {data}/>
            ))
        }
        
    </div>
  )
}

export default VideoContainers