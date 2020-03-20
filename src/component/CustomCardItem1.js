import React from "react";
import { Card, Flex } from "antd-mobile";
import { useHistory } from "react-router-dom";

export default function CustomCardItem1(props) {
  const { image, text1, text2 } = props;
  const history = useHistory();

  function goNext() {
    history.push("/shape");
  }
  return (
    <div>
      <Card className="custom-card" onClick={goNext}>
        <Card.Body>
          <Flex>
            <Flex.Item>
              <div className="card-img-icon">
                <img
                  className="card-item-img-icon"
                  src={"/images/" + image + ""}
                  width="20"
                  alt=""
                />
              </div>
            </Flex.Item>
            <Flex.Item className="flex-img-icon">
              <div className="card-text-item1">{text1}</div>
              <div className="card-text-item2">{text2}</div>
            </Flex.Item>
          </Flex>
        </Card.Body>
      </Card>
    </div>
  );
}
