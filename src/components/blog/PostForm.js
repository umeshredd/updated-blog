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
import { withRouter } from 'react-router-dom'

import blog from "./../../assets/img/static-background.png";

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
      loading: false
    };
  }

  OnSubmit = () => {
    const user = this.props.auth;
    console.log(this.props);
    const newPost = {
      text: this.state.text,
      title: this.state.title,
      name: user.name,
      avatar: user.avatar,
      id: user.id
    };

    this.props.addPost(newPost);
    this.setState({ text: "" });
  };

  onInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  messageChanges = e => { };
  render() {
    const { classes } = this.props;
    let name = this.props.name;

    if (name === undefined || name === null || String(name).trim() === "") {
      name = "Person";
    }

    return (
      <CardBody style={{ padding: 0 }}>
        <div>
          <img src={blog} style={{ width: "100%" }} />

        </div>
        <Cardhead>
          <Typography variant="caption" align="left">
            <div style={{ display: "flex", padding: 25, alignItems: "center" }}>
              {" "}
              <PermIdentity
                className={classes.icons}
                style={{ marginRight: 15 }}
              />
              {name}
            </div>
          </Typography>
        </Cardhead>
        <CardBody>
          <CustomInput
            labelText="Title"
            id="message"
            formControlProps={{
              fullWidth: true,
              className: classes.textArea
            }}
            inputProps={{
              // multiline: true,
              rows: 5,
              value: this.state.title
            }}
            onInputChange={e => {
              this.setState({ text: e });
            }}
          />
          <CustomInput
            labelText="Enter Your Post Here"
            id="message"
            formControlProps={{
              fullWidth: true,
              className: classes.textArea
            }}
            inputProps={{
              multiline: true,
              rows: 5,
              value: this.state.text
            }}
            onInputChange={e => {
              this.setState({ text: e });
            }}
          />
          <GridContainer>
            <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
              <Typography variant="caption" align="left">
                {/* button color #81408C */}
                <Button
                  color="primary"
                  round={true}
                  style={{ backgroundColor: "#81408C !important" }}
                  onClick={this.OnSubmit}
                >
                  Submit
                </Button>
              </Typography>
            </GridItem>
          </GridContainer>
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

export default withRouter(connect(
  mapStateToProps,
  { addPost }
)(withStyles(headerStyle)(PostForm)));
