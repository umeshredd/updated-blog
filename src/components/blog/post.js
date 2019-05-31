import React from "react";
import CardBody from "../Card/CardBody";
import withStyles from "@material-ui/core/styles/withStyles";
import { addPost } from "../../actions/postActions";
import { connect } from "react-redux";
import blog from "./../../assets/img/banner.png";
import { withRouter } from 'react-router-dom'

// import Avatar from "@material-ui/core/Avatar";

// import img1 from "../../assets/img/avatar1.jpeg";
// import img2 from "../../assets/img/avatar2.jpeg";
// import img3 from "../../assets/img/avatar3.jpeg";

import headerStyle from "../../assets/jss/material-kit-react/components/blog/blogStyle";

class PostHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false
    };
  }

  render() {
    return (
      <CardBody>
        <img src={blog} style={{ width: "100%" }} />
      </CardBody>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.user,
  errors: state.errors
});

export default withRouter(connect(
  mapStateToProps,
  { addPost }
)(withStyles(headerStyle)(PostHeader)));
