import React from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";
import { WingBlank, WhiteSpace } from "antd-mobile";

export default function Arrange() {
  const data = [
    {
      key: 1,
      image_name: "scatter.png",
      text1: "SCATTERED DISCRETE",
      text2: ""
    },
    {
      key: 2,
      image_name: "linear.png",
      text1: "LINEAR",
      text2: ""
    },
    {
      key: 3,
      image_name: "group.png",
      text1: "GROUPED CONFLUENT",
      text2: ""
    }
  ];
  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "50%"
  };
  return (
    <div>
      <CustomNavBar route="/shape" title="Arrange" />
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {data.map(item => (
          <div key={item.key}>
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
