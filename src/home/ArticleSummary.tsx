import * as React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setCurrentRoute } from "../store/navigation/navigationSlice";

const styles: any = {
  root: {
    height: "100%",
    whiteSpace: "pre-line",
    flexShrink: 1000,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  body: {
    marginTop: 20,
    marginBottom: 30,
    textAlign: "left" as const,
    width: "85%",
  },
  readArticle: {
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 100,
    cursor: "pointer",
  },
};
export default ({ article }: any) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const RightArrow = (
    <div style={styles.arrow}>
      <AiOutlineArrowRight size={40} />
    </div>
  );

  return (
    <div style={styles.root}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.subtitle}>{`Author: ${article.author}`}</div>
      <div style={styles.subtitle}>{`Date: ${article.date}`}</div>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={styles.body}>{article.summary}</div>
      </div>
      <div
        style={styles.readArticle}
        onClick={() => {
          history.push(`/article/${article.issueNo}`);
          dispatch(setCurrentRoute(`/article/${article.issueNo}`));
        }}
      >
        <div style={{ width: "100%", color: "blue" }}>Read full article...</div>
        {RightArrow}
      </div>
    </div>
  );
};
