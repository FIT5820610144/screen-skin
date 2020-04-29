import React, { useState, useEffect } from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";

import { WingBlank, WhiteSpace } from "antd-mobile";

export default function Color(props) {
  const selectItem = (val, name) => {
    localStorage.setItem("color", val);
  };

  const [colorItem, setColorItem] = useState([]);
  useEffect(() => {
    const data = [
      {
        key: 1,
        image_name: "red-circle.png",
        text1: "RED",
        text2: "สีแดง",
        value: "red",
      },
      {
        key: 2,
        image_name: "yellow.png",
        text1: "YELLOW",
        text2: "สีเหลือง",
        value: "yellow",
      },
      {
        key: 3,
        image_name: "white.png",
        text1: "WHITE",
        text2: "สีขาว",
        value: "white",
      },
      {
        key: 4,
        image_name: "clear-color.png",
        text1: "CLEAR",
        text2: "สีใส",
        value: "clear",
      },
      {
        key: 5,
        image_name: "skin.png",
        text1: "SKIN TONE",
        text2: "สีเดียวกับผิวหนัง",
        value: "skin",
      },
    ];
    const mophology = localStorage.getItem("mophology");
    const shape = localStorage.getItem("shape");
    const arrange = localStorage.getItem("arrange");
    const distribution = localStorage.getItem("distribution");
    if (
      (mophology === "erosion" || mophology === "crust") &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized"
    ) {
      setColorItem(
        (colorItem) =>
          (colorItem = data.filter((item) => item.key === 1 || item.key === 2))
      );
    } else if (
      (mophology === "plaque" ||
        mophology === "pustule" ||
        mophology === "scale") &&
      shape === "coin" &&
      arrange === "linear" &&
      (distribution === "intertriginous" || distribution === "bilateral")
    ) {
      setColorItem(
        (colorItem) => (colorItem = data.filter((item) => item.key === 1))
      );
    } else if (
      (mophology === "scale" &&
        shape === "ring" &&
        arrange === "scatter_discrete" &&
        (distribution === "intertriginous" ||
          distribution === "generalized")) ||
      (mophology === "abscess" &&
        shape === "coin" &&
        arrange === "scatter_discrete" &&
        distribution === "intertriginous") ||
      (mophology === "wheal" &&
        shape === "polycyclic" &&
        arrange === "scatter_discrete" &&
        distribution === "generalized")
    ) {
      setColorItem(
        (colorItem) => (colorItem = data.filter((item) => item.key === 1))
      );
    } else if (
      mophology === "papule" &&
      shape === "coin" &&
      arrange === "grouped_confluent" &&
      distribution === "acral"
    ) {
      setColorItem(
        (colorItem) =>
          (colorItem = data.filter((item) => item.key === 1 || item.key === 5))
      );
    } else if (
      mophology === "patch" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized"
    ) {
      setColorItem(
        (colorItem) => (colorItem = data.filter((item) => item.key === 3))
      );
    } else if (
      mophology === "vesicle" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "intertriginous"
    ) {
      setColorItem(
        (colorItem) => (colorItem = data.filter((item) => item.key === 1))
      );
    } else if (
      (mophology === "vesicle" &&
        shape === "coin" &&
        arrange === "scatter_discrete" &&
        distribution === "generalized") ||
      (mophology === "bulla" &&
        shape === "polycyclic" &&
        arrange === "scatter_discrete" &&
        distribution === "dermatiomal")
    ) {
      setColorItem(
        (colorItem) => (colorItem = data.filter((item) => item.key === 4))
      );
    }
  }, []);
  return (
    <div>
      <CustomNavBar route="/distribution" title="Color" />
      <WingBlank
        size="lg"
        className={
          props.location.state === "back"
            ? "animated slideInLeft"
            : "animated slideInRight"
        }
      >
        <WhiteSpace size="lg" />
        {colorItem.map((item) => (
          <div
            key={item.key}
            onClick={() => selectItem(item.value, item.text1)}
          >
            <CustomCardItem1
              image={item.image_name}
              text1={item.text1}
              text2={item.text2}
              route="/anatomicalsite"
              modalUse={false}
            />
            <WhiteSpace size="lg" />
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
