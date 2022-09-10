import React from "react";
import { Switch, Route } from "react-router-dom";
import Slider from "./Slider";

class SlideOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childPosition: Slider.CENTER,
      curChild: props.children,
      curUniqId: props.uniqId,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevUniqId = prevProps.uniqKey || prevProps.children.type;
    const uniqId = this.props.uniqKey || this.props.children.type;

    if (prevUniqId !== uniqId) {
      this.props.updateStep(
        "(componentDidUpdate)",
        "Uniq ID has changed!",
        `It was ${prevUniqId}, but is now ${uniqId}`,
        "Begin sliding TO_LEFT, but set `prevChild` so we keep rendering the old page!"
      );

      this.setState({
        childPosition: Slider.TO_LEFT,
        curChild: this.props.children,
        curUniqId: uniqId,
        prevChild: prevProps.children,
        prevUniqId,
        animationCallback: this.swapChildren
      });
    }
  }

  swapChildren = () => {
    this.props.updateStep(
      "(swapChildren)",
      "TO_LEFT animation has completed!",
      "Remove `prevChild` so our new child is rendered",
      "Start animating FROM_RIGHT"
    );

    this.setState({
      childPosition: Slider.FROM_RIGHT,
      prevChild: null,
      prevUniqId: null,
      animationCallback: () => {
        this.props.updateStep("All done!");
        this.setState({ animationCallback: null });
      }
    });
  };

  render() {
    return (
      <Slider
        position={this.state.childPosition}
        animationCallback={this.state.animationCallback}
      >
        {this.state.prevChild || this.state.curChild}
      </Slider>
    );
  }
}

const animateSwitch = (CustomSwitch, AnimatorComponent) => ({
  updateStep,
  children
}) => (
  <Route
    render={({ location }) => (
      <AnimatorComponent uniqKey={location.pathname} updateStep={updateStep}>
        <CustomSwitch location={location}>{children}</CustomSwitch>
      </AnimatorComponent>
    )}
  />
);

const SwitchWithSlide = animateSwitch(Switch, SlideOut);

export default SwitchWithSlide;
