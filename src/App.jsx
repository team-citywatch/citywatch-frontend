import React from "react";

import { withStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import HomePage from "./views/HomePage";
import GoogleMap from "./components/GoogleMap";

const styles = () => ({
  license: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    margin: "auto",
    display: "block",
    textAlign: "center",
    padding: "0 3px",
    fontSize: 12,
    background: "white"
  }
});

class App extends React.Component {
  state = {
    map: null,
    overlays: []
  };

  handleMap = map => {
    this.setState({ map });
  };

  handleOverlays = overlays => {
    this.setState({ overlays });
  };

  render() {
    const { classes } = this.props;
    const { map, overlays } = this.state;

    return (
      <>
        <CssBaseline />
        <GoogleMap onSetMap={this.handleMap} overlays={overlays} />
        <HomePage map={map} setOverlay={this.handleOverlays} />
        <Typography className={classes.license} variant="caption">
          Team CityWatch in F8
        </Typography>
      </>
    );
  }
}

export default withStyles(styles)(App);
