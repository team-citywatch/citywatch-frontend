import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
};

export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng,
      },
    };
  }
}
export default CurrentLocation;

// CurrentLocation.defaultProps = {
//   zoom: 14,
//   initialCenter: {
//     lat: -1.2884,
//     lng: 36.8233,
//   },
//   centerAroundCurrentLocation: false,
//   visible: true,
// };
