import React from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";
import { WingBlank, WhiteSpace } from "antd-mobile";

export default function Shape() {
  const data = [
    {
      key: 1,
      image_name: "ring.png",
      text1: "RING",
      text2: "รอยโรคกลมเหมือนเหรียญ"
    },
    {
      key: 2,
      image_name: "coin.png",
      text1: "COIN",
      text2: "น้ำเหลืองแห้งร่วมกับเศษเซลล์"
    },
    {
      key: 3,
      image_name: "polycyclic.png",
      text1: "POLYCYCLIC",
      text2: "คลำได้ ขนาดใหญ่กว่า 0.5 เซนติเมตร"
    }
  ];
  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "50%"
  };
  return (
    <div>
      <CustomNavBar route="/mophology" title="Shape" />
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {data.map(item => (
          <div key={item.key}>
            <CustomCardItem1
              image={item.image_name}
              text1={item.text1}
              text2={item.text2}
              route="/arrange"
              imgStyle={imageStyle}
            />
            <WhiteSpace size="lg" />
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
