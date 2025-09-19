import React from 'react'
import { useSelector } from 'react-redux'
import MyvideoCard from '../components/myvideocard/MyvideoCard'
function Myvideopage() {
 const uploadedvideos = useSelector(state => state.uploadedVideos.items);

 if(!uploadedvideos || uploadedvideos.length === 0) {
    return <p className='p-4 text-center'>No uploaded videos yet</p>
 }
    return (
        <div className="pt-20 p-4">
      <h2 className="text-2xl font-bold mb-4">My Uploaded Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {uploadedvideos.map(video => (
          <MyvideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
    )
}

export default Myvideopage
