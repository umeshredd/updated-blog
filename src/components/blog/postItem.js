import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deletePost,
  addLike,
  removeLike,
  checkCommentService,
  checkLikeService
} from "../../actions/postActions";
import CardBody from "../Card/CardBody";
import Card from "../Card/Card";
import headerStyle from "../../assets/jss/material-kit-react/components/blog/blogStyle";
import { withRouter } from "react-router-dom";

import CommentForm from "../blogComment/CommentForm";
import CommentFeed from "../blogComment/CommentFeed";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { ThumbUp, InsertComment } from "@material-ui/icons";

import img1 from "../../assets/img/avatar1.jpeg";
import img2 from "../../assets/img/avatar2.jpeg";
import img3 from "../../assets/img/avatar3.jpeg";
import laoding from "../../assets/img/loading.gif";

const LIKECOLOR = "#3f51b5";
const UNLIKECOLOR = "#9e9e9e";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComment: false,
      liked: null,
      likecolor: UNLIKECOLOR,
      likecount: 0,
      commentcount: 0
    };
  }

  async componentDidMount() {
    const { post } = this.props;
    if (Object.keys(this.props.token.user).length === 0) {
      // Store.dispatch(loginUser("1"));
    }
    await this.props.checkCommentService();
    await this.props.checkLikeService();
    let liked = await this.findUserLike(post.like);
    let likecount = await post.like.length;
    let commentcount = await post.comments.length;

    // console.log(liked);
    this.setState({
      liked: liked,
      likecolor: liked ? LIKECOLOR : UNLIKECOLOR,
      likecount,
      commentcount
    });
  }

  async onLikeClick(id) {
    if (this.state.liked) {
      this.onUnlikeClick(id);
      return false;
    }
    let storedUser = await JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser !== null) {
      let username = await storedUser.name;
      let headers =
        (await username.trim()) === "umesh"
          ? { "x-username": "test" }
          : { "x-username": "Jhon" };
      const LikeData = {
        usrId: storedUser.id,
        email: storedUser.email
      };
      this.setState({
        liked: true,
        likecount: this.state.likecount + 1,
        likecolor: LIKECOLOR
      });

      this.props.addLike(id, LikeData, headers);
    } else {
      // alert("Please Login");
    }
  }

  async onUnlikeClick(id) {
    let storedUser = await JSON.parse(localStorage.getItem("currentUser"));
    // console.log(token);
    if (storedUser !== null) {
      let username = await storedUser.name;
      let headers =
        (await username.trim()) === "umesh"
          ? { "x-username": "test" }
          : { "x-username": "Jhon" };

      const LikeData = {
        usrId: storedUser.id,
        email: storedUser.email
      };

      this.props.removeLike(id, LikeData, headers);
      this.setState({
        liked: false,
        likecolor: UNLIKECOLOR,
        likecount: this.state.likecount - 1
      });
    }
  }

  async findUserLike(likes) {
    if (typeof likes)
      if (typeof likes && Object.keys(likes).length === 0) {
        return false;
      }

    let storedUser = await JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser !== null) {
      if (likes.filter(like => like.user === storedUser.id).length > 0) {
        this.setState({ liked: true });
        return true;
      } else {
        return false;
      }
    }
  }
  OnCommentButton = () => {
    this.setState({ showComment: !this.state.showComment });
  };
  render() {
    const { post, classes, service } = this.props;
    const { CommentService, LikeService } = service;
    const { showComment, likecolor, likecount, commentcount } = this.state;
    let img;
    // console.log(post.name);
    if (post.name === "umesh") {
      img = img1;
    } else if (post.name === "Jhon deo") {
      img = img2;
    } else if (post.name === "Fred deo") {
      img = img3;
    } else {
      img = img3;
    }
    return (
      <div>
        <Card style={{ marginTop: 0 }}>
          <CardBody>
            <div
              style={{
                display: "flex",
                padding: 15,
                alignItems: "center",
                borderBottom: "1px solid #9e9e9e"
              }}
            >
              <Avatar
                alt={post.name}
                src={img}
                className={classes.bigAvatar}
                style={{ width: 60, height: 60 }}
              />{" "}
              <span style={{ paddingLeft: 30 }}>
                <strong style={{ fontSize: 16, color: "#000000c7" }}>
                  {post.title}
                </strong>
                <Typography
                  variant="caption"
                  align="left"
                  style={{ paddingTop: 10 }}
                >
                  {post.text}
                </Typography>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {!LikeService && (
                <img
                  src={laoding}
                  style={{
                    width: 50,
                    height: 50,
                    position: "relative",
                    top: 6,
                    right: 0
                  }}
                />
              )}

              {LikeService ? (
                <div>
                  <button
                    onClick={this.onLikeClick.bind(this, post)}
                    type="button"
                    className="btn btn-light mr-1"
                  >
                    <ThumbUp
                      className={classes.icons}
                      style={{
                        color: likecolor
                      }}
                    />
                  </button>
                  <Typography
                    variant="subheading"
                    inline={true}
                    color="primary"
                  >
                    {likecount}
                  </Typography>

                  {/* <button
                    onClick={this.onUnlikeClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-light mr-1"
                  /> */}
                </div>
              ) : null}
              {!CommentService && (
                <img
                  src={laoding}
                  style={{
                    width: 50,
                    height: 50,
                    position: "relative",
                    top: -45,
                    right: -77
                  }}
                />
              )}
              {CommentService ? (
                <div>
                  <Typography
                    variant="caption"
                    inline={true}
                    align="right"
                    color="primary"
                    style={{
                      cursor: "pointer",
                      position: "relative",
                      top: -33,
                      right: -100
                    }}
                    onClick={this.OnCommentButton}
                  >
                    <Typography
                      variant="subheading"
                      inline={true}
                      color="primary"
                      style={{
                        position: "relative",
                        top: -9,
                        paddingRight: 10
                      }}
                    >
                      {commentcount}
                    </Typography>
                    <InsertComment
                      className={classes.icons}
                      style={{
                        color: "#424242"
                      }}
                    />
                  </Typography>
                  {showComment ? (
                    <CommentForm
                      postId={post._id}
                      submited={() =>
                        this.setState({
                          showComment: !this.state.showComment,
                          commentcount: this.state.commentcount + 1
                        })
                      }
                    />
                  ) : null}
                </div>
              ) : null}
            </div>
            <div style={{ paddingLeft: 10 }}>
              <CommentFeed postId={post._id} comments={post.comments} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  token: state.auth,
  service: state.post
});

export default withRouter(
  connect(
    mapStateToProps,
    { deletePost, addLike, removeLike, checkCommentService, checkLikeService }
  )(withStyles(headerStyle)(PostItem))
);
