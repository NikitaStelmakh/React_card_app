import { DOCUMENTATION } from "./videos";
import { useParams } from 'react-router-dom';
import './VideoPage.css';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";



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
    </div>
  );
}

export default ArticlePage;