import './VideoCard.css'
import { useState } from 'react'

type VideoCardProps = {
    title: string;
    channelName: string;
    img: string;
}

function VideoCard({title, channelName, img}: VideoCardProps) {
    const [likesCount, setLikesCount] = useState(0)

    const increaseLikesCount = () => setLikesCount(likesCount +1);

    return (
        <div className="video_card">
            <img className="video_img" src={img} alt="example image" />
            <p>{title}</p>
            <p>{channelName}</p>
            <div className="video_footer">
              <div className="likes_counter">
                  <p>Like: {likesCount}</p>
              </div>
            <button className="btn" onClick={increaseLikesCount}>Like</button>
            </div>
        </div>
    )
}

export default VideoCard