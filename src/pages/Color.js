import React from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";
import { WingBlank, WhiteSpace } from "antd-mobile";

export default function Color() {
  const data = [
    {
      key: 1,
      image_name: "red-circle.png",
      text1: "RED",
      text2: ""
    },
    {
      key: 2,
      image_name: "yellow-circle.webp",
      text1: "YELLOW",
      text2: ""
    },
    {
      key: 3,
      image_name: null,
      text1: "WHITE",
      text2: ""
    },
    {
      key: 4,
      image_name: null,
      text1: "CLEAR",
      text2: ""
    }
  ];
  return (
    <div>
      <CustomNavBar route="/distribution" title="Color" />
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {data.map(item => (
          <div key={item.key}>
            <CustomCardItem1
              image={item.image_name}
              text1={item.text1}
              text2={item.text2}
              route="/anatomicalsite"
            />
            <WhiteSpace size="lg" />
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
