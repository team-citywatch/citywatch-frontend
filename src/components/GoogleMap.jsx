import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  overlay: {
    backgroundColor: "rgba(17, 56, 178, 0.3)",
    border: "solid 1px rgba(17, 56, 178)",
    borderRadius: "50%",
    transition: ".2s ease"
  },
  active: {
    backgroundColor: "rgba(178, 56, 17, 0.3)",
    border: "solid 1px rgba(178, 56, 17)"
  }
});

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.343393,
      lng: -121.869534
    },
    zoom: 11
  };

  handleApiLoaded = (map, maps) => {
    this.props.onSetMap(map);
  };

  render() {
    const { center, zoom, overlays, classes, currentIndex } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
          {overlays &&
            overlays.map((overlay, index) => (
              <div
                className={`${classes.overlay} ${index === currentIndex &&
                  classes.active}`}
                key={index}
                lat={overlay.lat}
                lng={overlay.lng}
                style={{
                  width: overlay.upvote * 5,
                  height: overlay.upvote * 5
                }}
              />
            ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default withStyles(styles)(GoogleMap);
