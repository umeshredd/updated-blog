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
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    // check for user auth
    const usrLen = Object.keys(this.props.token.user).length;
    if (usrLen === 0) {
      // this.props.loginUser();
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
    let postContents = <Spinner />;
    // const NoPost = () => (
    //   <div>
    //     <span>There are No Posts Please Create one</span>
    //   </div>
    // );
    if (typeof posts === "object" && Object.keys("posts").length > 0) {
      postContents = (
        <CardBody style={{ paddingTop: 0, paddingBottom: 0 }}>
          <PostFeed posts={posts} />
        </CardBody>
      );
    } else if (typeof posts === "object" && Object.keys("posts").length === 0) {
      postContents = <Spinner />;
    }
    // if (loading) {
    //   postContents = <Spinner />;
    // } else if (!loading) {
    //   if (typeof posts === "object") {
    //     postContents = (
    //       <CardBody style={{ paddingTop: 0, paddingBottom: 0 }}>
    //         <PostFeed posts={posts} />
    //       </CardBody>
    //     );
    //   } else {
    //     postContents = <Spinner />;
    //   }
    // }
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
