import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import axios from "axios";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  footerBottom: {
    color: "#096dba",
    marginTop: 5,
    fontSize: 12,
    fontFamily: "mono",
    fontWeight: 500,
  },
  span: {
    margin: 5,
  },
}));

export default function MainFooter() {
  const classes = useStyles();
  const [forks, setForks] = useState();
  const [stars, setStars] = useState();

  const githubContent = async () => {
    const { data } = await axios.get(
      `https://api.github.com/repos/bhagatabhijeet/chype`
    );

    setForks(data.forks_count);
    setStars(data.stargazers_count);
  };

  useEffect(() => {
    githubContent();
  }, []);
  return (
    <footer className={classes.footerBottom}>
      <div>
        <Link
          color="inherit"
          href="https://github.com/bhagatabhijeet/chype"
          target="_blank"
        >
          Built with ❤ by Chype Team
          <span className={classes.span}>
            <Icon
              className="far fa-star"
              style={{ fontSize: 12, marginRight: 5 }}
            />
            {stars}
          </span>
          <span className={classes.span}>
            <Icon
              className="fas fa-code-branch"
              style={{ fontSize: 12, marginRight: 5 }}
            />
            {forks}
          </span>
        </Link>
      </div>
    </footer>
  );
}
