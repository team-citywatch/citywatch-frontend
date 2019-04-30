import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import LocationOn from "@material-ui/icons/LocationOn";
import Person from "@material-ui/icons/Person";

const ReportCard = ({
  classes,
  content,
  location,
  upvote,
  image,
  onClick,
  user
}) => (
  <Paper className={classes.item} elevation={0} onClick={onClick}>
    <span className={classes.upvote}>{upvote} Ups!</span>
    <img src={image} alt="" className={classes.cover} />
    <div className={classes.contentBox}>
      <div className={classes.content}>
        <Typography>{content}</Typography>
      </div>
      <div className={classes.metas}>
        <Typography
          variant="caption"
          className={classes.metaTypo}
          gutterBottom
          align="center"
        >
          <LocationOn
            className={classes.icon}
            fontSize="inherit"
            color="disabled"
          />
          {location}
        </Typography>
        <Typography
          variant="caption"
          className={classes.metaTypo}
          gutterBottom
          align="center"
        >
          <Person
            className={classes.icon}
            fontSize="inherit"
            color="disabled"
          />
          {user && `${user.firstName} ${user.lastName}`}
        </Typography>
      </div>
    </div>
  </Paper>
);

const styles = () => ({
  item: {
    position: "relative",
    borderBottom: "1px solid #eee",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
    paddingTop: 7,
    display: "flex",
    transition: ".3s ease",
    "&:last-child": {
      borderBottom: "none"
    },
    "&:hover": {
      background: "#f4f4f4"
    }
  },
  upvote: {
    position: "absolute",
    top: 10,
    left: 13,
    fontSize: 10,
    padding: 3,
    background: "#2196f3",
    borderRadius: 8,
    color: "white"
  },
  cover: {
    objectFit: "cover",
    width: "100px !important",
    height: 100,
    marginRight: 5
  },
  contentBox: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flexGrow: 1
  },
  metas: {
    display: "flex"
  },
  metaTypo: {
    marginRight: 8
  },
  icon: {
    marginRight: 2
  }
});

export default withStyles(styles)(ReportCard);
