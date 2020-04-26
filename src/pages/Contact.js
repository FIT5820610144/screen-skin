import React from "react";
import CustomNavBar from "./../component/CustomNavBar";
import { WingBlank, WhiteSpace, Card } from "antd-mobile";

export default function Contact() {
  return (
    <div>
      <CustomNavBar route="/" title="Contact" />
      <WingBlank size="lg" className={"animated slideInRight"}>
        <WhiteSpace size="lg" />
        <Card className="custom-card">
          <Card.Body style={{ color: "white", textAlign: "center" }}>
            <h4>
              กรณีมีข้อสงสัยหรือสอบถามข้อมูลเพิ่มเติม
              <br />
              กรุณาติดต่อเราได้ที่
            </h4>
            <hr style={{ background: "gray", border: "0.5px solid" }}></hr>
            <h4>
              <u>Email</u>
            </h4>
            <h4>
              6020810015@email.psu.ac.th
              <br />
              6020810030@email.psu.ac.th
            </h4>
            <h4>
              <u>Tel</u>
            </h4>
            <h4>0612016010, 0817383156</h4>
          </Card.Body>
        </Card>
      </WingBlank>
    </div>
  );
}
