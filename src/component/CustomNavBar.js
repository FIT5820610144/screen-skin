import React from "react";
import { useHistory } from "react-router-dom";
import { NavBar, WhiteSpace } from "antd-mobile";
import CustomIcon from "./CustomIcon";

export default function CustomNavBar(props) {
  const history = useHistory();

  function onBack() {
    history.push(props.route, "back");
  }

  function goHome() {
    history.push("/");
    localStorage.clear();
  }
  return (
    <div>
      <NavBar
        icon={<CustomIcon name="back-icon" size="20" />}
        onLeftClick={onBack}
        className="navBar"
        rightContent={
          <div onClick={goHome}>
            <CustomIcon name="home-icon" size="20" />
          </div>
        }
      >
        {props.title}
      </NavBar>
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
    </div>
  );
}
