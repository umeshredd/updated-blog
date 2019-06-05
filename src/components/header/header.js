import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Add from "@material-ui/icons/Add";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../../actions/authActions";

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "../../assets/jss/material-kit-react/components/headerStyle";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }
  handleDrawerToggle() {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    });
  }

  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      fixed,
      absolute
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    const brandComponent = (
      <Button className={classes.title}>
        <div style={{ display: "flex" }}>
          <Add
            className={classes.icons}
            style={{ fontWeight: "800", color: "#a567a4", fontSize: 30 }}
          />
          <span>READ</span>
        </div>
      </Button>
    );
    return (
      <AppBar
        className={appBarClasses}
        style={{
          boxShadow:
            "0 0px 0px 0px rgba(0, 0, 0, 0.12), 0 5px 3px -5px rgba(0, 0, 0, 0.15)",
          height: 60
        }}
      >
        <Toolbar className={classes.container} style={{maxWidth:'100%'}}>
          {" "}
          {leftLinks !== undefined ? brandComponent : null}{" "}
          <div className={classes.flex}>
            {" "}
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {" "}
                {leftLinks}{" "}
              </Hidden>
            ) : (
              brandComponent
            )}{" "}
          </div>{" "}
          <Hidden smDown implementation="css">
            {" "}
            {rightLinks}{" "}
          </Hidden>{" "}
          <Hidden mdUp>
            <IconButton
              color="inherit"
              arialabel="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>{" "}
          </Hidden>{" "}
        </Toolbar>{" "}
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {" "}
              {leftLinks} {rightLinks}{" "}
            </div>{" "}
          </Drawer>{" "}
        </Hidden>{" "}
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: "dark"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
    "nero"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser, logoutUser }
  )(withStyles(headerStyle)(Header))
);
