import { DOCUMENTATION } from "./videos";
import { useParams } from 'react-router-dom';
import './VideoPage.css';
import ReactMarkdown from "react-markdown";



function ArticlePage() {
  const {id} = useParams();

  const article = DOCUMENTATION.find(
    article => article.id === id
  )

  if(!article) {
    return <h1>Article not found</h1>;
  }

    return (
    <div>
      <img className="page_img" src={article.img} alt={article.title} />
      <h1>{article.title}</h1>
      <ReactMarkdown>{article.contents}</ReactMarkdown>
    </div>
  );
}

export default ArticlePage;