import { DOCUMENTATION } from "./DOCUMENTATION";
import { useParams } from 'react-router-dom';
import './ArticlePage.css';
import ArticleNavigation from './ArticleNavigation.tsx';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import  Header  from './header.tsx';



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
      <div className="article_header">
        <Header></Header>
      </div>
      <div className="main_content">
        <div className="page_header">
          <img className="img_page" src={article.img} alt={article.title} />
          <h1 className="title_page">{article.title}</h1>
        </div>
        <h2 className="description_page">{article.description}</h2>  
        <div className="markdown">
        <ReactMarkdown
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");

              return match ? (
                <SyntaxHighlighter
                  style={prism}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                     fontFamily: '"JetBrains Mono", monospace',
                     backgroundColor: "#eef8ff",
                     padding: "20px",
                     borderRadius: "10px",
                     fontSize: "16px",
                     lineHeight: "1.6",
                  }}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="inline_code" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {article.contents}
        </ReactMarkdown>
      </div>
      <ArticleNavigation></ArticleNavigation>
      </div>
    </div>
  );
}

export default ArticlePage;