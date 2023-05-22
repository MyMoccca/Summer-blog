import React from "react";
import { Helmet } from "react-helmet";
import articles from "@assets/data.json";
import { useParams } from "react-router-dom";

function ArticleDesc() {
  const { id } = useParams();
  const article = articles.find((art) => art.id === +id);

  return (
    <div className="container">
      <Helmet>
        <title>{article.title} - Adventure Blog</title>
        <meta name="description" content={article.resume} />
      </Helmet>
      <div className="row mx-4 my-4">
        <h2 className="text-center ">{article.title}</h2>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="polaroid">
            <img
              src={article.image.src}
              alt={article.image.alt}
              className="w-100 rounded-1"
            />
          </div>
        </div>
        <div className="col-6">
          <p>{article.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleDesc;
