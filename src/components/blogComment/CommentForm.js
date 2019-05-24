import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Typography from "@material-ui/core/Typography";

import withStyles from "@material-ui/core/styles/withStyles";
import headerStyle from "../../assets/jss/material-kit-react/components/blog/blogStyle";

import { addComment } from "../../actions/postActions";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };

    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  commentSubmit = e => {
    const { user } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
      id: user.id
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: "" });
    this.props.submited(true);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-body">
            <div className="form-group">
              <CustomInput
                onInputChange={e => {
                  this.setState({ text: e });
                }}
                labelText="Enter Your Message Here"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.text
                }}
                inputProps={{
                  multiline: true,
                  type: "text",
                  rows: 2,
                  value: this.state.text
                }}
              />
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Typography variant="caption" align="left">
                  {/* button color #81408C */}
                  <Button
                    color="primary"
                    round={true}
                    style={{ backgroundColor: "#81408C !important" }}
                    onClick={this.commentSubmit}
                  >
                    Submit
                  </Button>
                </Typography>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
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

export default connect(
  mapStateToProps,
  { addComment }
)(withStyles(headerStyle)(CommentForm));
