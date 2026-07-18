import './VideoCard.css'

type VideoCardProps = {
    title: string;
    channelName: string;
    img: string;
}

function VideoCard({title, channelName, img}: VideoCardProps) {
    return (
        <div className="video_card">
              <img className="video_card" src={img} alt="example image" />
              <p>{title}</p>
              <p>{channelName}</p>
              <div className="video_footer">
                <p>Like: 0</p>
                <button>Like</button>
              </div>
        </div>
    )
}

export default VideoCard