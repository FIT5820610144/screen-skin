import React from "react";
import { Button } from "antd-mobile";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  function handleClick() {
    history.push("/mophology");
  }

  return (
    <div className="home-page">
      <img className="logo" src="/images/logo.png" alt="logo" />
      <div className="center">
        <Button className="custom-button" onClick={handleClick}>
          คัดกรองโรค
        </Button>
        <Button className="custom-button">ติดต่อสอบถาม</Button>
      </div>
      <div className="footer">
        จัดทำโดย
        <br />
        นักศึกษาคณะพยาบาลศาสตร์ ม.อ.ปัตตานี
      </div>
    </div>
  );
}
