import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";

import Close from "@material-ui/icons/Close";

import ReportCard from "./ReportCard";
import { Typography } from "@material-ui/core";

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

    transition: ".3s ease"
  },
  active: {
    height: "100vh"
  },
  activeCloseButton: {
    display: "block !important"
  },
  list: {
    paddingTop: 88,
    overflowY: "scroll",
    height: "100%"
  },
  closeButton: {
    zIndex: 2,
    position: "absolute",
    top: 20,
    right: 20,
    display: "none"
  },
  resultMeta: {
    marginLeft: 10,
    marginBottom: 10
  }
});

const ReportOverlay = ({ classes, items, active, onClose, onClickItem }) => (
  <Paper
    elevation={2}
    className={`${classes.container} ${active && classes.active}`}
  >
    <Paper
      className={`${classes.closeButton} ${active &&
        classes.activeCloseButton}`}
    >
      <IconButton onClick={onClose}>
        <Close />
      </IconButton>
    </Paper>
    <div className={classes.list}>
      <Typography className={classes.resultMeta}>
        About {items.length} results
      </Typography>
      {items &&
        items.map((item, index) => (
          <ReportCard
            key={index}
            {...item}
            onClick={() => onClickItem(index)}
          />
        ))}
    </div>
  </Paper>
);

export default withStyles(styles)(ReportOverlay);
