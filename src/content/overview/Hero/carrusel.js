import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
//carusel
const siproCarousel = [
  {
    imgPath:
      "https://www.stackscale.com/wp-content/uploads/2021/02/definition-data-center-datacenter-centro-de-datos-Stackscale.jpg"
  },
  {
    imgPath:
      "https://www.oplk.com/wp-content/uploads/2020/05/mantenimiento-preventivo.jpg"
  },
  {
    imgPath:
      "https://esemanal.mx/revista/wp-content/uploads/2019/10/Portada-datacenter.jpg"
  },
  {
    imgPath:
      "https://www.weblife.fr/wp-content/uploads/2013/06/datacenter-640x400.jpg"
  },
  {
    imgPath:
      "https://www.orbit.es/wp-content/uploads/2021/12/ventajas-y-desventajas-de-los-servicios-de-colocation-datacenter.jpg"
  }
];
const styles = (theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 8
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    height: "60vh"
  }
});
class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };
  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };
  render() {
    const {classes} = this.props;
    const {activeStep} = this.state;
    const maxSteps = siproCarousel.length;
    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {siproCarousel.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 1 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt='sliders'
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper} 
        />
      </div>
    );
  }
}
SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
