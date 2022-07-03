import * as React from "react";
import ArticleBookItem from "./ArticleListItem";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import articles from "../articles/data/articles";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../store/navigation/navigationSlice";
import Header from "../header/Header";
import ArticleSummary from "./ArticleSummary";
import ArticleList from "./ArticleList";

const styles: any = {
  root: {},
  title: {
    fontSize: 30,
    fontWeight: 600,
    paddingTop: 40,
    textAlign: "center" as const,
    height: "7vh",
    background: "black",
    color: "pink",
  },
  body: {
    display: "flex",
    marginTop: 100,
  },

  arrow: {
    position: "absolute",
    right: 20,
    top: "50vh",
    margin: 10,
    cursor: "pointer",
  },
};

export default (props: any) => {
  let history = useHistory();
  let dispatch = useDispatch();
  const [chosenArticle, setChosenArticle] = React.useState(articles[0]);

  const Articles = <div style={styles.leftColumn}></div>;

  const Body = (
    <div style={styles.body}>
      <ArticleList
        articles={articles}
        chosenArticle={chosenArticle}
        setChosenArticle={setChosenArticle}
      />
      <ArticleSummary article={chosenArticle} />
      {Articles}
    </div>
  );

  return (
    <div style={styles.root} className="page-container page">
      <Header />
      {Body}
    </div>
  );
};
