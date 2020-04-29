import React, { useState, useEffect } from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";
import { WingBlank, WhiteSpace } from "antd-mobile";

export default function Shape(props) {
  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  };
  const selectItem = (val, name) => {
    localStorage.setItem("shape", val);
  };

  const [shapeItem, setShapeItem] = useState([]);
  useEffect(() => {
    const data = [
      {
        key: 1,
        image_name: "ring.png",
        text1: "RING",
        text2: "รอยโรคกลมนูนที่ขอบ",
        value: "ring",
      },
      {
        key: 2,
        image_name: "coin.png",
        text1: "COIN",
        text2: "รอยโรคกลมเหมือนเหรียญ",
        value: "coin",
      },
      {
        key: 3,
        image_name: "polycyclic.png",
        text1: "POLYCYCLIC",
        text2: "รอยโรคมีหลายลักษณะรวมกันมีทั้งครบและไม่ครบวงกลม",
        value: "polycyclic",
      },
    ];
    const mophology = localStorage.getItem("mophology");
    if (
      mophology === "erosion" ||
      mophology === "crust" ||
      mophology === "plaque" ||
      mophology === "pustule" ||
      mophology === "papule" ||
      mophology === "patch" ||
      mophology === "vesicle" ||
      mophology === "abscess"
    ) {
      setShapeItem(
        (shapeItem) => (shapeItem = data.filter((item) => item.key === 2))
      );
    } else if (mophology === "scale") {
      setShapeItem(
        (shapeItem) => (shapeItem = data.filter((item) => item.key !== 3))
      );
    } else if (mophology === "wheal" || mophology === "bulla") {
      setShapeItem(
        (shapeItem) => (shapeItem = data.filter((item) => item.key === 3))
      );
    }
  }, []);

  return (
    <div>
      <CustomNavBar route="/mophology" title="Shape" />
      <WingBlank
        size="lg"
        className={
          props.location.state === "back"
            ? "animated slideInLeft"
            : "animated slideInRight"
        }
      >
        <WhiteSpace size="lg" />
        {shapeItem.map((item) => (
          <div
            key={item.key}
            onClick={() => selectItem(item.value, item.text1)}
          >
            <CustomCardItem1
              image={item.image_name}
              text1={item.text1}
              text2={item.text2}
              route="/arrange"
              imgStyle={imageStyle}
              modalUse
            />
            <WhiteSpace size="lg" />
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
