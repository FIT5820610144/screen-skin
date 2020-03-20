import React from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";
import { WingBlank, WhiteSpace } from "antd-mobile";

export default function Mophology() {
  const MophologyData = [
    {
      key: 1,
      image_name: "test_img.png",
      text1: "EROSION",
      text2: "รอยถลอกที่ชั้นหนังกำพร้า"
    },
    {
      key: 2,
      image_name: "test_img.png",
      text1: "CRUST",
      text2: "น้ำเหลืองแห้งร่วมกับเศษเซลล์"
    },
    {
      key: 3,
      image_name: "test_img.png",
      text1: "PLAQUE",
      text2: "คลำได้ ขนาดใหญ่กว่า 0.5 เซนติเมตร"
    },
    {
      key: 4,
      image_name: "test_img.png",
      text1: "PUSTULE",
      text2: "ตุ่มหนอง ขนาดเล็กกว่า 0.5 เซนติเมตร"
    },
    {
      key: 5,
      image_name: "test_img.png",
      text1: "SCALE",
      text2: "Desquamation"
    },
    {
      key: 6,
      image_name: "test_img.png",
      text1: "PAPULE",
      text2: "คลำได้ ขนาดเล็กกว่า 1 เซนติเมตร การแบ่งโรคขึ้นกับพื้นผิวของรอยโรค"
    },
    {
      key: 7,
      image_name: "test_img.png",
      text1: "PATCH",
      text2: "แบนราบ คลำไม่ได้ ขนาดมากกว่า 0.5 เซนติเมตร"
    },
    {
      key: 8,
      image_name: "test_img.png",
      text1: "VESICLE",
      text2: "ตุ่มน้ำ ขนาดเล็กกว่า 0.5 เซนติเมตร"
    },
    {
      key: 9,
      image_name: "test_img.png",
      text1: "BULLA",
      text2: "ตุ่มน้ำขนาดใหญ่กว่า 0.5 ซม. "
    },
    {
      key: 10,
      image_name: "test_img.png",
      text1: "WHEAL",
      text2: "การบวมผิวหนังชั้นหนังแท้ชั่วคราว รวมกับมีการแดงรอบ"
    },
    {
      key: 11,
      image_name: "test_img.png",
      text1: "ABSCESS",
      text2: ""
    }
  ];

  console.log(MophologyData);
  return (
    <div>
      <CustomNavBar route="/" title="Mophology" />
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {MophologyData.map(item => (
          <div key={item.key}>
            <CustomCardItem1
              image={item.image_name}
              text1={item.text1}
              text2={item.text2}
            />
            <WhiteSpace size="lg" />
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
