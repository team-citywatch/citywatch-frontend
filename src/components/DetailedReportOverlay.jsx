import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ArrowBack from "@material-ui/icons/ArrowBack";
import LocationOn from "@material-ui/icons/LocationOn";
import Person from "@material-ui/icons/Person";

const styles = theme => ({
  container: {
    boxSizing: "border-box",
    position: "absolute",
    zIndex: 1,
    left: 0,
    bottom: 0,
    height: 0,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: 380
    },

    overflowY: "hidden",

    transition: ".3s ease"
  },
  active: {
    height: "100vh"
  },
  previousButton: {
    position: "absolute",
    top: 20,
    right: 20
  },
  cover: {
    height: 250,
    width: "100%",
    objectFit: "cover"
  },
  contentBox: {
    padding: "15px 20px"
  },
  content: {
    marginTop: 15
  },
  metaTypo: {
    verticalAlign: "center"
  }
});

class DetailedReportOverlay extends React.Component {
  render() {
    const { classes, active, onPrevious, item } = this.props;

    return (
      <Paper className={`${classes.container} ${active && classes.active}`}>
        <Paper className={classes.previousButton}>
          <IconButton onClick={onPrevious}>
            <ArrowBack />
          </IconButton>
        </Paper>
        <img src={item.image} alt="" className={classes.cover} />
        <div className={classes.contentBox}>
          <Typography className={classes.metaTypo}>
            <LocationOn
              className={classes.icon}
              fontSize="inherit"
              color="disabled"
            />
            {item.location}
          </Typography>
          <Typography className={classes.metaTypo}>
            <Person
              className={classes.icon}
              fontSize="inherit"
              color="disabled"
            />
            {item.reporter && item.reporter.name}
          </Typography>

          <Typography className={classes.content}>{item.content}</Typography>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(DetailedReportOverlay);
