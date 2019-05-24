import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import PostItem from "./postItem";

class PostFeed extends Component {
  render() {
    const { posts } = this.props;
    if (posts === null) {
      return false;
    }

    return posts.map(post => <PostItem key={post._id} post={post} />);
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;
