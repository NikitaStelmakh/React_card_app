import './VideoCard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export type ArticleCardProps = {
    title: string;
    contents: any;
    img: string;
    id: string;
    description: string;
}

function ArticleCard({title, img, id, description}: ArticleCardProps) {
    const [likesCount, setLikesCount] = useState(0)

    const increaseLikesCount = () => setLikesCount(likesCount +1);

    return (
        <div className="video_card">
            <Link to={`/article/${id}`} className="video_link">
              <img className="video_img" src={img} alt="example image" />
              <p>{title}</p>
              <p>{description}</p>
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

export default ArticleCard
