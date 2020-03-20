import React from "react";
import CustomNavBar from "./../component/CustomNavBar";
import { Card, WingBlank, WhiteSpace, Grid } from "antd-mobile";
import { useHistory } from "react-router-dom";

export default function Picture() {
  const history = useHistory();
  function goNext() {
    history.push("/result");
  }
  const data1 = [
    {
      icon: "/images/test-deseace-photo.png"
    }
  ];
  return (
    <div>
      <CustomNavBar
        route="/anatomicalsite"
        title="เลือกรูปภาพที่ใกล้เคียงมากที่สุด"
      />
      <WingBlank size="lg">
        <WhiteSpace />
        <WhiteSpace />
        <Card className="custom-card" onClick={goNext}>
          <Card.Body>
            {data1.map(item => (
              <div>
                <img src={item.icon} alt="" className="card-photo-image " />
              </div>
            ))}
          </Card.Body>
        </Card>
      </WingBlank>
    </div>
  );
}
