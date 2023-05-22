import React from "react";
import { Helmet } from "react-helmet";
import articles from "@assets/data.json";
import PolaroidCard from "@components/PolaroidCard";

function Articles() {
  return (
    <div>
      <Helmet>
        <title>My album pictures - best summer ever</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut repellendus deleniti nam corrupti eius ipsam accusantium pariatur nesciunt eos, perspiciatis saepe eveniet. Ut aperiam, velit sit alias eaque dignissimos quis."
        />
      </Helmet>
      <section className="main-container">
        <div>
          {articles.map((article) => (
            <PolaroidCard article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Articles;
