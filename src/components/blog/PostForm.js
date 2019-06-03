import React from "react";
import CardBody from "../Card/CardBody";
import Cardhead from "../Card/CardHeader";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { PermIdentity } from "@material-ui/icons";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import PropTypes from "prop-types";
import { addPost } from "../../actions/postActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HeaderMenu from "./../common/Header";
import blog from "./../../assets/img/static-background.png";
import Header from "./../header/header";
// import Avatar from "@material-ui/core/Avatar";
// import img1 from "../../assets/img/avatar1.jpeg";
// import img2 from "../../assets/img/avatar2.jpeg";
// import img3 from "../../assets/img/avatar3.jpeg";

import headerStyle from "../../assets/jss/material-kit-react/components/blog/blogStyle";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false,
      title: ""
    };
  }

  OnSubmit = () => {
    let user = this.props.auth;
    console.log(this.props);
    if (String(this.state.text).trim() === "") {
      return false;
    } else {
      if (Object.keys(user).length === 0) {
        const localUser = localStorage.getItem("currentUser");
        if (localUser !== null || localUser !== undefined) {
          user = JSON.parse(localUser);
          console.log(user);
        }
      }

      const newPost = {
        text: this.state.text,
        title: this.state.title,
        name: user.name,
        avatar: user.avatar,
        id: user.id
      };

      this.props.addPost(newPost);
      this.setState({ text: "", title: "" });
      this.props.history.push("/");
    }
  };

  onInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  messageChanges = e => {};
  render() {
    const { classes } = this.props;
    let name = this.props.name;

    if (name === undefined || name === null || String(name).trim() === "") {
      name = "Person";
    }

    return (
      <CardBody style={{ padding: 0 }}>
        <Header />
        <HeaderMenu />
        <div>
          <img
            src={blog}
            style={{ width: "100%", position: "absolute", top: 130 }}
          />
        </div>
        <GridContainer
          style={{
            position: "absolute",
            right: 100,
            marginTop: -10,
            borderWidth: 1,
            borderColor: "red"
          }}
        >
          <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
            <Typography variant="caption" align="left">
              {/* button color #81408C */}
              <Button
                color="white"
                round={false}
                style={{ backgroundColor: "#fffff !important" }}
                onClick={this.OnSubmit}
              >
                Publish
              </Button>
            </Typography>
          </GridItem>
        </GridContainer>
        <CardBody
          style={{ paddingTop: 80, paddingLeft: 150, paddingRight: 150 }}
        >
          <CustomInput
            labelText="Title"
            id="message"
            formControlProps={{
              fullWidth: true,
              className: classes.textArea
            }}
            inputProps={{
              // multiline: true,

              value: this.state.title
            }}
            onInputChange={e => {
              this.setState({ title: e });
            }}
          />
          <CustomInput
            labelText="Tell Your Story...."
            id="message"
            formControlProps={{
              fullWidth: true,
              className: classes.textArea
            }}
            inputProps={{
              multiline: true,
              rows: 50,
              value: this.state.text
            }}
            onInputChange={e => {
              this.setState({ text: e });
            }}
          />
        </CardBody>
      </CardBody>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth.user,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { addPost }
  )(withStyles(headerStyle)(PostForm))
);
