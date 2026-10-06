import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DOCUMENTATION } from './DOCUMENTATION.tsx';
import './ArticleNavigation.css'

function ArticleNavigation () {
const { id } = useParams();

const currentIndex = DOCUMENTATION.findIndex(
    article => article.id === id

);

const prevArticle = DOCUMENTATION[currentIndex - 1];
const nextArticle = DOCUMENTATION[currentIndex + 1];

return <div className="article_navigation">
    <Link to={'/'}> All articles </Link>

    {prevArticle ?
      (<Link to={`/article/${prevArticle.id}`}> ← Previous article </Link>)
      : (<span />)
      }

      {nextArticle ?
         (<Link to={`/article/${nextArticle.id}`}> Next article →</Link>)
         : (<span />)
      }
  </div>

};

export default ArticleNavigation;