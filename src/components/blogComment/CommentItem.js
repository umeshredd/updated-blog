import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import { withStyles } from "@material-ui/core/styles";
import img1 from "../../assets/img/avatar1.jpeg";
import img2 from "../../assets/img/avatar2.jpeg";
import img3 from "../../assets/img/avatar3.jpeg";
import { withRouter } from "react-router-dom";

const styles = {
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 30,
    height: 30
  },

  orangeAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
};

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, classes } = this.props;
    let img;
    if (comment.name === "Fred Jhon") {
      img = img1;
    } else if (comment.name === "John Doe") {
      img = img2;
    } else {
      img = img3;
    }
    return (
      <Grid container alignItems="center">
        <Avatar alt={comment.name} src={img} className={classes.bigAvatar} />
        <Typography variant="caption">
          <span style={{ fontWeight: 600, color: "#4a4a4a" }}>
            {comment.text}
          </span>
          <br />
          {new Date(comment.date).toLocaleDateString()}{" "}
          {new Date(comment.date).toLocaleTimeString()}
        </Typography>
      </Grid>
    );
  }
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(withStyles(styles)(CommentItem))
);
