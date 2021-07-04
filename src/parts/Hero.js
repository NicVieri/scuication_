import React from "react";
import Fade from "react-reveal/Fade";
import logo from "assets/images/logo/scuication.svg";

export default function Hero(props) {
  return (
    <Fade top>
      <div className="Banner">
        <div className="logo1">
          <img src={logo} alt={"{props.data.scuication}Scuication"} />
        </div>
      </div>
    </Fade>
  );
}
