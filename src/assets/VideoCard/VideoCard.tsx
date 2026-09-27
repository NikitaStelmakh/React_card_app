import './VideoCard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type VideoCardProps = {
    title: string;
    channelName: string;
    img: string;
    id: number;
}

function VideoCard({title, channelName, img, id}: VideoCardProps) {
    const [likesCount, setLikesCount] = useState(0)

    const increaseLikesCount = () => setLikesCount(likesCount +1);

    return (
        <div className="video_card">
            <Link to={`/video/${id}`} className="video_link">
              <img className="video_img" src={img} alt="example image" />
              <p>{title}</p>
              <p>{channelName}</p>
            </Link>
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