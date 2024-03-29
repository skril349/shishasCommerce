import React, { Component, useEffect } from "react";
import { Button, Image } from "semantic-ui-react";
import "../../node_modules/react-dat-gui/build/react-dat-gui.css";
import FluidAnimation from "../../react-fluid-animation";
import Header from "../Header";
// import image from './lena.png'

const defaultConfig = {
  textureDownsample: 2,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 20,
  splatRadius: 0.005,
};

export default class Fluid extends Component {
  state = {
    config: {
      ...defaultConfig,
    },
  };

  render() {
    const { config } = this.state;
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <FluidAnimation config={config} animationRef={this._animationRef} />
        <div>
          <Header />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: "none",
          }}
        >
          <h1
            style={{
              fontSize: "5em",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
              color: "#fff",
            }}
          >
            DARK OWL
          </h1>
        </div>
      </div>
    );
  }

  _animationRef = (ref) => {
    this._animation = ref;
  };

  _onUpdate = (config) => {
    this.setState({ config });
  };

  _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 100) | 0);
  };

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } });
    _onClickRandomSplats();
  };
}
