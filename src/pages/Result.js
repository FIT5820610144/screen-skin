import React from "react";
import CustomNavBar from "./../component/CustomNavBar";
import { Card, WingBlank, WhiteSpace, Button } from "antd-mobile";
import { useHistory } from "react-router-dom";
import CustomIcon from "./../component/CustomIcon";

export default function Result() {
  const history = useHistory();

  function goHome() {
    history.push("/");
  }
  return (
    <div>
      <CustomNavBar route="/picture" title="ผลการวินิฉัยโรค" />
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card className="custom-card-result">
          <Card.Body>
            <div className="deseace-name">ชื่อโรค</div>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
        <Card className="custom-card-result">
          <Card.Header title="การรักษาและการดูแลเบื้องต้น" />
          <WingBlank size="lg">
            <Card.Body className="card-content-result">
              <div className="ward-content">
                <ol>
                  <li>
                    ยาน้ำทา เช่น 20% sodium thiosulfate หรือ 2.5% selenium
                    sulfide lotion หรือ แชมพูที่มีส่วนประกอบของketoconazole
                    ให้ทายาที่ผื่นทิ้งไว้ 5-10 นาทีแล้วล้างออก
                    ยานี้ถ้าทาหรือฟอกมากเกินไป อาจเกิดการระคายเคืองที่ผิวหนังได้
                  </li>
                  <li>
                    ยารับประทาน ใช้ในกรณีที่มีผื่นจำนวนมาก หรือทายาแล้วไม่ได้ผล
                    ควรใช้ยาภายใต้คำแนะนำของแพทย์
                    เนื่องจากยารับประทานอาจก่อให้เกิดผลข้างเคียงได้
                  </li>
                  <li>
                    รักษาสุขอนามัยส่วนบุคคล เช่น เสื้อผ้า ผ้าเช็ดตัว
                    ควรจะซักและนำออกผึ่งแดดให้แห้งก่อนนำมาใช้และไม่ควรใช้ร่วมกับผู้อื่น
                    อาบน้ำ ชำระร่างกายให้สะอาดอยู่เสมอ
                    อย่าปล่อยให้เหงื่อไคลหมักหมม
                  </li>
                </ol>
              </div>
            </Card.Body>
            <WhiteSpace size="lg" />
          </WingBlank>
        </Card>
        <WhiteSpace size="lg" />
        <Button className="result-button" onClick={goHome}>
          <CustomIcon name="home-icon" size="20" inline />
          <div style={{ display: "inline", marginLeft: "1rem" }}>
            กลับสู่หน้าหลัก
          </div>
        </Button>
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  );
}
