/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownloa0, FavoriteBorder } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";
import Logo from "../../assets/img/logo.png";
import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle";

function RightLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          {""}{" "}
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(RightLinks);
