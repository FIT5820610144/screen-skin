import React from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";
import { WingBlank, WhiteSpace } from "antd-mobile";

export default function AnatomicalSite() {
  const data = [
    {
      key: 1,
      image_name: "foothand.png",
      text1: "ฝ่ามือ ฝ่าเท้า",
      text2: ""
    },
    {
      key: 2,
      image_name: "finger.png",
      text1: "นิ้วมือ นิ้วเท้า",
      text2: ""
    },
    {
      key: 3,
      image_name: "arm.png",
      text1: "ข้อศอก",
      text2: ""
    },
    {
      key: 4,
      image_name: "yellow-water.png",
      text1: "บริเวณที่มีต่อมเหงื่ออยู่มาก",
      text2: ""
    },
    {
      key: 5,
      image_name: "wast.png",
      text1: "ต่อมน้ำเหลือง",
      text2: ""
    },
    {
      key: 6,
      image_name: "face.png",
      text1: "ใบหน้า",
      text2: ""
    },
    {
      key: 7,
      image_name: "body.png",
      text1: "ลำตัว",
      text2: ""
    }
  ];
  return (
    <div>
      <CustomNavBar route="/color" title="Anatomical Site" />
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {data.map(item => (
          <div key={item.key}>
            <CustomCardItem1
              image={item.image_name}
              text1={item.text1}
              text2={item.text2}
              route="/picture"
            />
            <WhiteSpace size="lg" />
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
