import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import articleType from "../types/ArticleType";

function PolaroidCard({ article }) {
  return (
    <Link to={`/articles/${article.id}`}>
      <div className="item">
        <div className="polaroid">
          <img
            src={article.image.src}
            alt={article.image.alt}
            className="w-100 rounded-1"
          />
          <div className="caption">{article.title}</div>
        </div>
      </div>
    </Link>
  );
}

PolaroidCard.propTypes = {
  article: PropTypes.instanceOf(articleType).isRequired,
};

export default PolaroidCard;
