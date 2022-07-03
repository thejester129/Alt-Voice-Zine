import * as React from "react";
import { useState } from "react";

const styles: any = {
  root: {
    cursor: "pointer",
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    height: 30,
  },
  label: {
    fontSize: 20,
    textAlign: "center",
  },
  hoverLabel: {
    fontSize: 20,
    textAlign: "center",
    transform: "scale(1.1)",
  },
  activeLabel: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
};
export default (props: any) => {
  const { article, onClick, chosen } = props;
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{ ...styles.root }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={
          chosen ? styles.activeLabel : hover ? styles.hoverLabel : styles.label
        }
      >{` ${chosen ? "•" : ""} ISSUE ${article.issueNo},  ${
        article.date
      }`}</div>
    </div>
  );
};
