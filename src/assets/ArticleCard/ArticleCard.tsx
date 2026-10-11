import './ArticleCard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export type ArticleCardProps = {
    title: string;
    contents: any;
    img: string;
    id: string;
    description?: string;
}

function ArticleCard({title, img, id, description}: ArticleCardProps) {
    const [likesCount, setLikesCount] = useState(0)

    const increaseLikesCount = () => setLikesCount(likesCount +1);

    return (
        <div className="article_card">
            <Link to={`/article/${id}`} className="article_link">
              <img className="article_img" src={img} alt="example image" />
              <h2>{title}</h2>
              <p>{description}</p>
            </Link>
            <div className="article_footer">
                <div className="likes_counter">
                    <p>Usefull: {likesCount}</p>
                </div>
                <button className="btn" onClick={increaseLikesCount}>Usefull</button>
            </div>
        </div>
    )
}

export default ArticleCard
