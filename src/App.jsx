import React from "react";

import { withStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";

import Routes from "./Routes";

const styles = () => ({
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    zIndex: 5
  }
});

const App = ({ classes }) => (
  <>
    <CssBaseline />
    <Routes />
    <Fab className={classes.fab} color="primary" />
  </>
);

export default withStyles(styles)(App);
