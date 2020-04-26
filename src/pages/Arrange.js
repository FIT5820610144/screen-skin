import React, { useState, useEffect } from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";
import { WingBlank, WhiteSpace } from "antd-mobile";

export default function Arrange(props) {
  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  };

  const selectItem = (val, name) => {
    localStorage.setItem("arrange", val);
  };

  const [arrangeItem, setArrangeItem] = useState([]);
  useEffect(() => {
    const data = [
      {
        key: 1,
        image_name: "scatter.png",
        text1: "SCATTERED DISCRETE",
        text2: "กระจายตัวไม่แน่นอน",
        value: "scatter_discrete",
      },
      {
        key: 2,
        image_name: "linear.png",
        text1: "LINEAR",
        text2: "เรียงตัวเป็นเส้นตรง",
        value: "linear",
      },
      {
        key: 3,
        image_name: "group.png",
        text1: "GROUPED CONFLUENT",
        text2: "กระจายตัวเป็นกลุ่ม",
        value: "grouped_confluent",
      },
    ];
    const mophology = localStorage.getItem("mophology");
    const shape = localStorage.getItem("shape");
    if (
      ((mophology === "erosion" ||
        mophology === "crust" ||
        mophology === "patch" ||
        mophology === "vesicle" ||
        mophology === "abscess") &&
        shape === "coin") ||
      ((mophology === "wheal" || mophology === "bulla") &&
        shape === "polycyclic")
    ) {
      setArrangeItem(
        (arrangeItem) => (arrangeItem = data.filter((item) => item.key === 1))
      );
    } else if (
      (mophology === "plaque" ||
        mophology === "pustule" ||
        mophology === "scale") &&
      shape === "coin"
    ) {
      setArrangeItem(
        (arrangeItem) => (arrangeItem = data.filter((item) => item.key === 2))
      );
    } else if (mophology === "scale" && shape === "ring") {
      setArrangeItem(
        (arrangeItem) => (arrangeItem = data.filter((item) => item.key === 1))
      );
    } else if (mophology === "papule" && shape === "coin") {
      setArrangeItem(
        (arrangeItem) => (arrangeItem = data.filter((item) => item.key === 3))
      );
    }
  }, []);
  return (
    <div>
      <CustomNavBar route="/shape" title="Arrange" />
      <WingBlank
        size="lg"
        className={
          props.location.state === "back"
            ? "animated slideInLeft"
            : "animated slideInRight"
        }
      >
        <WhiteSpace size="lg" />
        {arrangeItem.map((item) => (
          <div
            key={item.key}
            onClick={() => selectItem(item.value, item.text1)}
          >
            <CustomCardItem1
              image={item.image_name}
              text1={item.text1}
              text2={item.text2}
              route="/distribution"
              imgStyle={imageStyle}
            />
            <WhiteSpace size="lg" />
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
