import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Sms";
import Add from "@material-ui/icons/Add";

import { addComment } from "../../actions/postActions";
const classes = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  commentSubmit = async e => {
    if (this.state.text.trim() === "") {
      alert("Comment is empty please add one");
      return false;
    }
    let storedUser = await JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser !== null) {
      const { postId } = this.props;
      const newComment = {
        text: this.state.text,
        name: storedUser.name,
        avatar: storedUser.avatar,
        id: storedUser.id
      };

      this.props.addComment(postId, newComment);
      this.setState({ text: "" });
      this.props.submited(true);
    } else {
      alert("Please Login");
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;
    return (
      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Add a comment...."
          inputProps={{ "aria-label": "Add a comment" }}
          value={this.state.text}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
          style={{ width: "80%" }}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="Search"
          onClick={this.commentSubmit}
        >
          <Add />
        </IconButton>
        <Divider className={classes.divider} />
      </Paper>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { addComment }
  )(CommentForm)
);
