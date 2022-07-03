import * as React from "react";
import { useState } from "react";
import {
  AiFillHeart,
  AiFillLike,
  AiOutlineArrowLeft,
  AiOutlineHeart,
  AiOutlineLike,
} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Header from "../header/Header";
import { setCurrentRoute } from "../store/navigation/navigationSlice";
import articles from "./data/articles";

const styles: any = {
  root: {},
  title: {
    fontSize: 30,
    fontWeight: 600,
    paddingLeft: 70,
    textAlign: "left" as const,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    paddingLeft: 150,
    textAlign: "left" as const,
    marginBottom: 50,
  },
  body: {
    display: "flex",
    direction: "row",
    alignItems: "stretch",
    whiteSpace: "pre-line",
  },
  arrow: { cursor: "pointer" },
  button: { cursor: "pointer" },
};
export default (props: any) => {
  let { issueNo }: any = useParams();
  const article = articles.find((a) => a.issueNo == issueNo);
  const dispatch = useDispatch();
  const history = useHistory();

  const [liked, setLiked] = useState(false);
  const [loved, setLoved] = useState(false);
  const [comment, setComment] = useState("");

  const LeftArrow = (
    <div
      style={styles.arrow}
      onClick={() => {
        history.push("");
        dispatch(setCurrentRoute(""));
      }}
    >
      <AiOutlineArrowLeft size={40} />
    </div>
  );

  // TODO no article
  const Title = article && (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: 40,
        marginLeft: 40,
      }}
    >
      {LeftArrow}
      <div style={styles.title}>{`ISSUE NO ${article.issueNo}`}</div>
    </div>
  );

  const Subtitle = article && (
    <>
      <div style={styles.subtitle}>{`Author: ${article.author}`}</div>
    </>
  );

  const Body = article && (
    <div style={styles.body}>
      <div style={{ marginLeft: 150, marginRight: 150 }}>{article.body}</div>
    </div>
  );

  const LikeButton = (
    <div style={styles.button} onClick={() => setLiked(!liked)}>
      {liked ? <AiFillLike size={30} /> : <AiOutlineLike size={30} />}
    </div>
  );

  const HeartButton = (
    <div style={styles.button} onClick={() => setLoved(!loved)}>
      {loved ? <FcLike size={30} /> : <AiOutlineHeart size={30} />}
    </div>
  );

  const Reacts = (
    <div style={{ display: "flex", marginLeft: 150, marginTop: 50, gap: 50 }}>
      {LikeButton}
      {HeartButton}
    </div>
  );

  const Comments = (
    <div
      style={{
        marginLeft: 150,
        marginRight: 150,
        marginTop: 40,
        marginBottom: 40,
      }}
    >
      <div style={{ width: "100vw" }}>Comments</div>
      <input
        type="text"
        name="userName"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment..."
        style={{
          width: "100%",
          borderStyle: "solid",
          height: 50,
          marginTop: 20,
          padding: 10,
        }}
      ></input>
    </div>
  );

  return (
    <div style={styles.root} className="page-container page">
      <Header />

      {Title}
      {Subtitle}
      {Body}
      {Reacts}
      {Comments}
    </div>
  );
};
