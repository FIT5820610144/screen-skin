import React, { useState } from "react";
import { Card, Flex } from "antd-mobile";
import { useHistory } from "react-router-dom";
import CustomModal from "./CustomModal.js";

export default function CustomCardItem1(props) {
  const { image, text1, text2, route, imgStyle } = props;
  const history = useHistory();

  function goNext() {
    history.push(route);
  }

  const [modal, setModal] = useState(false);
  function openModal() {
    setModal((modal) => (modal = true));
  }

  function closeModal() {
    console.log("close");
    setModal((modal) => (modal = false));
  }

  console.log(modal);
  return (
    <div>
      <CustomModal
        visible={modal}
        onClose={closeModal}
        title={text1}
        image={image}
      />
      <Card className="custom-card">
        <Card.Body>
          <Flex>
            <Flex.Item>
              <div className="card-img-icon">
                <img
                  style={imgStyle}
                  className="card-item-img-icon"
                  src={"/images/" + image + ""}
                  alt=""
                  onClick={() => openModal()}
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
