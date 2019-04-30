import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";

const styles = () => ({
  searchBar: {
    display: "flex"
  },
  input: {
    flexGrow: 1
  }
});

class SearchBar extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit();
  };

  render() {
    const { classes, onChange } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.searchBar}>
            <Input
              className={classes.input}
              fullWidth
              onChange={value => onChange(value.target.value)}
              disableUnderline
            />
            <IconButton type="submit">
              <Search />
            </IconButton>
          </div>
        </form>
      </>
    );
  }
}

export default withStyles(styles)(SearchBar);
