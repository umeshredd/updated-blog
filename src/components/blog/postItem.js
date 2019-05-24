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
import { loginUser } from "../../actions/authActions";
import Store from "../../store/store";
import CardBody from "../Card/CardBody";
import Card from "../Card/Card";
import CardFoot from "../Card/CardFooter";
import Cardhead from "../Card/CardHeader";
import { PermIdentity } from "@material-ui/icons";
import headerStyle from "../../assets/jss/material-kit-react/components/blog/blogStyle";

import CommentForm from "../blogComment/CommentForm";
import CommentFeed from "../blogComment/CommentFeed";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import img1 from "../../assets/img/avatar1.jpeg";
import img2 from "../../assets/img/avatar2.jpeg";
import img3 from "../../assets/img/avatar3.jpeg";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComment: false
    };
  }

  async componentDidMount() {
    if (Object.keys(this.props.token.user).length === 0) {
      Store.dispatch(loginUser("1"));
    }
    this.props.checkCommentService();
    this.props.checkLikeService();
  }
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    const { token } = this.props;
    console.log(token);
    const LikeData = {
      usrId: token.user.id,
      email: token.user.email
    };

    this.props.addLike(id, LikeData);
  }

  onUnlikeClick(id) {
    const { token } = this.props;
    console.log(token);
    const LikeData = {
      usrId: token.user.id,
      email: token.user.email
    };
    this.props.removeLike(id, LikeData);
  }

  findUserLike(likes) {
    const { token } = this.props;
    if (likes.filter(like => like.user === token.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }
  OnCommentButton = () => {
    this.setState({ showComment: !this.state.showComment });
  };
  render() {
    const { post, showActions, token, classes, service } = this.props;
    const { CommentService, LikeService } = service;
    const { showComment } = this.state;
    let img;
    if (post.name === "Fred Jhon") {
      img = img1;
    } else if (post.name === "John Doe") {
      img = img2;
    } else if (post.name === "Alfred Smith") {
      img = img3;
    } else {
      img = img3;
    }
    return (
      <div>
        <Card>
          <Cardhead>
            <Typography variant="caption" align="left">
              <div
                style={{ display: "flex", padding: 15, alignItems: "center" }}
              >
                {" "}
                <Avatar
                  alt={post.name}
                  src={img}
                  className={classes.bigAvatar}
                  style={{ width: 60, height: 60 }}
                />{" "}
                <span style={{ paddingLeft: 30 }}>
                  <strong>{post.name}</strong>
                </span>
              </div>
            </Typography>
          </Cardhead>
          <CardBody
            style={{
              border: "1px solid",
              borderRadius: 20,
              borderColor: "#808080",
              borderWidth: 1,
              marginRight: 30,
              marginLeft: 30,
              padding: 15
            }}
          >
            <Typography variant="caption" align="left">
              {post.text}
            </Typography>
          </CardBody>
          <CardFoot
            style={{
              display: "inline-block"
              // justifyContent: "space-between",
              // alignItems: "center"
            }}
          >
            {LikeService ? (
              <span style={{ width: "100%" }}>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <Typography variant="caption" align="left" color="error">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsLink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="upvote"
                        className="icon_svg-stroke icon_svg-fill"
                        strokeWidth="1.5"
                        stroke="#666"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15" />
                      </g>
                    </svg>
                  </Typography>
                </button>
                <Typography variant="subheading" inline={true} color="primary">
                  {post.like.length}
                </Typography>

                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsLink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="downvote"
                      className="icon_svg-stroke icon_svg-fill"
                      stroke="#666"
                      fill="none"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                    >
                      <polygon
                        transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) "
                        points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"
                      />
                    </g>
                  </svg>
                </button>
              </span>
            ) : null}
            {CommentService ? (
              <span style={{ width: "100%" }}>
                <Typography
                  variant="caption"
                  inline={true}
                  align="right"
                  color="primary"
                  style={{ cursor: "pointer" }}
                  onClick={this.OnCommentButton}
                >
                  Comments
                </Typography>
                {showComment ? (
                  <CommentForm
                    postId={post._id}
                    submited={() =>
                      this.setState({ showComment: !this.state.showComment })
                    }
                  />
                ) : null}
              </span>
            ) : null}
          </CardFoot>

          <div style={{ paddingLeft: 10 }}>
            <CommentFeed postId={post._id} comments={post.comments} />
          </div>
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

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike, checkCommentService, checkLikeService }
)(withStyles(headerStyle)(PostItem));
