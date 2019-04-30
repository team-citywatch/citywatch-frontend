import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

import Send from "@material-ui/icons/Send";

import SearchBar from "../components/SearchBar";
import ReportOverlay from "../components/ReportOverlay";
import DetailedReportOverlay from "../components/DetailedReportOverlay";

import { fetchReport } from "../apis/fetch";

const images = [
  "building.jpg",
  "garbage.jpeg",
  "manhole.jpg",
  "pothole.jpg",
  "traffic_light.jpg"
];

const styles = theme => ({
  searchBar: {
    position: "absolute",
    zIndex: 3,
    top: 20,
    left: 20,

    paddingLeft: 20,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 95px)"
    },
    [theme.breakpoints.up("sm")]: {
      width: 285
    },

    transition: ".3s ease"
  },
  fab: {
    position: 'absolute',
    right: 60,
    bottom: 30
  }
});

class HomePage extends React.Component {
  state = {
    activeList: false,
    itemIndex: 0,
    activeDetailed: false,
    value: "",
    items: []
  };

  handleChange = value => {
    this.setState({ value });
  };

  handleSubmit = () => {
    fetchReport(this.state.value).then(items => {
      this.setState(
        {
          activeList: true,
          items: items.map(value => ({
            ...value,
            image: value.image
              ? value.image
              : "https://s3-us-west-2.amazonaws.com/f8-citywatch/" +
                images[Math.floor(Math.random() * images.length)]
          }))
        },
        () => this.props.setOverlay(this.state.items)
      );
    });
  };

  handleClose = () => {
    this.setState({ activeList: false });
  };

  handleClickItem = index => {
    this.setState({
      activeDetailed: true,
      itemIndex: index
    });

    const current = this.state.items[index];
    this.props.onPointing(index);
    this.props.map.setCenter({
      lng: current.lng,
      lat: current.lat
    });
  };

  handlePrevious = () => {
    this.setState({
      activeList: true,
      activeDetailed: false
    });
    this.props.onPointing(null);
  };

  render() {
    const { classes } = this.props;
    const { activeList, activeDetailed, items, itemIndex } = this.state;

    return (
      <>
        <Paper elevation={1} className={`${classes.searchBar}`}>
          <SearchBar
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Paper>
        <ReportOverlay
          active={activeList}
          items={items}
          onClose={this.handleClose}
          onClickItem={this.handleClickItem}
        />
        <DetailedReportOverlay
          active={activeDetailed}
          item={itemIndex in items && items[itemIndex]}
          onPrevious={this.handlePrevious}
        />
        <Tooltip title="Report an issue" aria-label="Report an issue">
          <Fab className={classes.fab} color="primary" onClick={() => {window.open('https://m.me/2305937723068633')}}>
            <Send />
          </Fab>
        </Tooltip>
      </>
    );
  }
}

export default withStyles(styles)(HomePage);
