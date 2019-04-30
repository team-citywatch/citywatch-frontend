import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";

import Close from "@material-ui/icons/Close";

import ReportCard from "./ReportCard";

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
    paddingTop: 88,
    height: "100vh"
  },
  activeCloseButton: {
    display: "block !important"
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    display: "none"
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
    <div>
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
