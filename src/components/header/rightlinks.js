/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Search from "@material-ui/icons/Search";
import NotificationsNone from "@material-ui/icons/NotificationsNone";
import Add from "@material-ui/icons/Add";
import Modal from "./../common/Modal";

import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../../actions/authActions";

// import Avatar from "@material-ui/core/Avatar";
// import cross from "../../assets/img/cross.png";

// import img1 from "../../assets/img/avatar1.jpeg";
// import img2 from "../../assets/img/avatar2.jpeg";
// import img3 from "../../assets/img/avatar3.jpeg";
import Loader from "../../assets/img/g-dots.gif";

// @material-ui/icons
import { Person } from "@material-ui/icons";

// core components

import Button from "../CustomButtons/Button";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const ITEM_HEIGHT = 48;

class RightLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      loading: false,
      user_id: 0,
      user_name: "umesh"
    };
  }

  handleClick = el => {
    this.setState({
      anchorEl: el.currentTarget
    });
  };

  componentDidMount() {
    let Loacl_StorageUser = localStorage.getItem("currentUser");
    if (Loacl_StorageUser !== null && Loacl_StorageUser !== undefined) {
      const user = JSON.parse(Loacl_StorageUser);
      this.setState({
        user_id: user.id,
        user_name: user.name
      });
    }

    // if (localStorage.getItem("currentUser") === null) {
    //   this.setState({ selected: options[0] });
    //   this.props.loginUser(1);
    // }
  }

  componentWillReceiveProps(prev, next) {
    let Loacl_StorageUser = localStorage.getItem("currentUser");
    if (Loacl_StorageUser !== null && Loacl_StorageUser !== undefined) {
      const user = JSON.parse(Loacl_StorageUser);
      this.setState({
        user_id: user.id,
        user_name: user.name
      });
    }

    if (this.props.auth.reloaded) {
      this.setState({ loading: false });
       window.location.reload()
      console.log(this.props);
    }
  }
  closeModal = () => false;

  handleSubMenu = i => {
    this.setState({ anchorEl: null, loading: true });
    this.props.loginUser(i);
    // setTimeout((
    //   window.location.reload()
    // ) , 1000)
  };
  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, loading } = this.state;
    console.log(loading);
    const open = Boolean(anchorEl);
    return loading ? (
      <Modal
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: loading ? "flex" : "none"
        }}
        open={loading}
        close={() => {}}
        DialogTitle=""
        title=""
      >
        <img src={Loader} style={{ width: "100%", heght: "100%" }} />
      </Modal>
    ) : (
      <div >
        <ClickAwayListener onClickAway={this.handleClose}>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200
              }
            }}
          >
            <Typography
              variant="overline"
              align="left"
              style={{ paddingLeft: 10 }}
            >
              Login as
            </Typography>
            <MenuItem onClick={this.handleSubMenu.bind(null, 0)}>
              <Person className={classes.icons} />
              <Typography variant="caption" align="right">
                Login As User 1
              </Typography>
            </MenuItem>
            <MenuItem onClick={this.handleSubMenu.bind(null, 1)}>
              <Person className={classes.icons} />
              <Typography variant="caption" align="right">
                Login As User 2
              </Typography>
            </MenuItem>
          </Menu>
        </ClickAwayListener>
        <Typography
          variant="overline"
          inline={true}
          style={{ paddingRight: 10 }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <Button
              className={classes.navLink}
              style={{
                height: 40,
                justifyContent: "center",
                aliginContents: "center",
                backgroundColor: "#73397e",
                color: "#fff",
                marginRight: 15
              }}
            >
              <div style={{ display: "flex" }}>
                <Link to="/PostForm">
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: "#fff" }}
                  >
                    <Add className={classes.icons} />
                    Add Story{" "}
                  </Typography>
                </Link>
              </div>
            </Button>
            <Search className={classes.icons} style={{ marginRight: 15 }} />
            <NotificationsNone
              className={classes.icons}
              style={{ marginRight: 15 }}
            />

            {/* <Avatar
              alt={selected}
              src={img}
              className={classes.bigAvatar}
              style={{ width: 30, height: 30, marginRight: 5 }}
            /> */}
            <Button
              color="transparent"
              aria-label="More"
              aria-owns={open ? "long-menu" : undefined}
              aria-haspopup="true"
              className={classes.navLink}
              onClick={this.handleClick}
              style={{ padding: 0 }}
            >
              <Typography variant="caption">
                <MoreVertIcon className={classes.icons} />
              </Typography>
            </Button>
          </span>
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser, logoutUser }
  )(withStyles(headerLinksStyle)(RightLinks))
);
