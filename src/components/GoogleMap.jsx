import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  overlay: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(17, 56, 178, 0.3)",
    border: "solid 1px rgba(17, 56, 178)",
    borderRadius: "50%"
  }
});

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  handleApiLoaded = (map, maps) => {
    this.props.onSetMap(map);
  };

  render() {
    const { center, zoom, overlays, classes } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
          {overlays &&
            overlays.map((overlay, index) => (
              <div
                className={classes.overlay}
                key={index}
                lat={overlay.lat}
                lng={overlay.lng}
              />
            ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default withStyles(styles)(GoogleMap);
