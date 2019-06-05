import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content"
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing.unit
  },
  mypaper: { margin: 10 }
});

class MaxWidthDialog extends React.Component {
  state = {
    open: false,
    fullWidth: true,
    maxWidth: "sm"
  };
  componentDidMount() {
    const { open } = this.props;
    this.setState({ open });
  }
  componentWillUnmount() {
    this.setState({ open: false });
  }

  handleClose = () => {
    this.props.close();
  };

  handleMaxWidthChange = event => {
    this.setState({ maxWidth: event.target.value });
  };

  handleFullWidthChange = event => {
    this.setState({ fullWidth: event.target.checked });
  };

  render() {
    const { classes, title, children, open } = this.props;

    return (
      <React.Fragment>
        <Dialog
          fullWidth={this.state.fullWidth}
          maxWidth={this.state.maxWidth}
          open={open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
          classes={{ paper: classes.mypaper }}
        >
          <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
          <DialogContent style={{ padding: 0 }}>{children}</DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

MaxWidthDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaxWidthDialog);
