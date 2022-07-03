import * as React from "react";
import ArticleListItem from "./ArticleListItem";

const styles: any = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: 400,
  },
};
export default ({ articles, chosenArticle, setChosenArticle }: any) => {
  //TODO sort by date
  const sortedArticles = articles.sort(
    (a: any, b: any) => a.issueNo < b.issueNo
  );
  return (
    <div style={styles.root}>
      {sortedArticles.map((article: any) => {
        return (
          <ArticleListItem
            key={article.issueNo}
            article={article}
            onClick={() => setChosenArticle(article)}
            chosen={chosenArticle === article}
          />
        );
      })}
    </div>
  );
};
