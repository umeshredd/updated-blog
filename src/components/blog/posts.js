import React from "react";
import headerStyle from "../../assets/jss/material-kit-react/components/blog/blogStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import PostForm from "./PostForm";
import Spinner from "../common/Spinner";
import PostFeed from "./postFeed";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/authActions";
import Post from "./post";
import {
  getPosts,
  checkCommentService,
  checkLikeService
} from "../../actions/postActions";

import CardBody from "../Card/CardBody";

class Posts extends React.Component {
  componentDidMount() {
    // check for user auth
    const usrLen = Object.keys(this.props.token.user).length;
    if (usrLen === 0) {
      this.props.loginUser("1");
    }

    // get all the posts
    this.props.getPosts();

    //check server status - comment
    this.props.checkCommentService();

    //check server status - like
    this.props.checkLikeService();
  }

  render() {
    // if there is no post or not fetched yet
    // load spinner else load the post
    const { classes, post } = this.props;
    const { posts, loading } = post;
    let checkd = false;
    let postContents;

    if (posts === null && loading) {
      postContents = <Spinner />;
    }
    if (typeof posts === "Array" && posts.length < 1) {
      postContents = <Spinner />;
    } else {
      checkd = true;
      postContents = (
        <CardBody>
          <PostFeed posts={posts} />
        </CardBody>
      );
    }
    return (
      <div className={classes.container}>
        <Post />
        {postContents}
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  token: state.auth
});

export default connect(
  mapStateToProps,
  { getPosts, checkLikeService, checkCommentService, loginUser }
)(withStyles(headerStyle)(Posts));
