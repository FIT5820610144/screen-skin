import React from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";
import { WingBlank, WhiteSpace } from "antd-mobile";

export default function Distribution() {
  const data = [
    {
      key: 1,
      image_name: "generalized.png",
      text1: "GENERALIZED UNIVERSAL",
      text2: ""
    },
    {
      key: 2,
      image_name: "intertriginous.png",
      text1: "INTERTRIGINOUS",
      text2: ""
    },
    {
      key: 3,
      image_name: "bilateral.png",
      text1: "BILATERAL SYMMETRIC",
      text2: ""
    },
    {
      key: 4,
      image_name: "acrol.png",
      text1: "ACROL MARGIN",
      text2: ""
    },
    {
      key: 5,
      image_name: "dermatomal.png",
      text1: "DERMATOMAL ZOSTERIFORM HERPETIFORM",
      text2: ""
    }
  ];
  const imageStyle = {
    width: "45%",
    marginTop: "-9px",
    marginLeft: "13px"
  };

  return (
    <div>
      <CustomNavBar route="/arrange" title="Distribution" />
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {data.map(item => (
          <div key={item.key}>
            <CustomCardItem1
              image={item.image_name}
              text1={item.text1}
              text2={item.text2}
              route="/color"
              imgStyle={imageStyle}
            />
            <WhiteSpace size="lg" />
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
