import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import classNames from 'classnames'
import PropTypes from 'prop-types'
// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";


import workStyle from "../../assets/jss/material-kit-react/views/landingPageSections/workStyle";


class WorkSection extends React.Component {

  data = () => {
    const { classes, title, description, titlecolor, titleFont } = this.props
    return (<div>
      <h2 className={classes.title} style={{ color: titlecolor || '#fff', font: titleFont || 'inherit' }}>{title}</h2>
      <h4 className={classes.description}>
        {description}
      </h4>
    </div>)
  }
  render() {
    const { classes, title, children, description, titlecolor, titleFont, shadow, color, ...rest } = this.props;
    const HeaderClases = classNames({
      [classes[color]]: color,
      section: true,
      boxShadow: shadow
    });
    const content = children || this.data();
    return (
      <div className={HeaderClases} {...rest}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            {content}
          </GridItem>
        </GridContainer>
      </div >
    );
  }
}
workStyle.defaultProp = {
  color: 'white'
}
workStyle.PropTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "white",
    "dark",
    "nero"
  ])
}

export default withStyles(workStyle)(WorkSection);
