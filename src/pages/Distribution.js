import React, { useState, useEffect } from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";

import { WingBlank, WhiteSpace } from "antd-mobile";

export default function Distribution(props) {
  const imageStyle = {
    width: "45%",
    marginTop: "-9px",
    marginLeft: "13px",
  };

  const selectItem = (val, name) => {
    localStorage.setItem("distribution", val);
  };

  const [distributionItem, setDistributionItem] = useState([]);
  useEffect(() => {
    const data = [
      {
        key: 1,
        image_name: "generalized.png",
        text1: "GENERALIZED UNIVERSAL",
        text2: "กระจายทั่วตัว",
        value: "generalized",
      },
      {
        key: 2,
        image_name: "intertriginous.png",
        text1: "INTERTRIGINOUS",
        text2: "กระจายตามซอกพับ",
        value: "intertriginous",
      },
      {
        key: 3,
        image_name: "bilateral.png",
        text1: "BILATERAL SYMMETRIC",
        text2: "สมมาตรระหว่างสองด้านของร่างกาย",
        value: "bilateral",
      },
      {
        key: 4,
        image_name: "acrol.png",
        text1: "ACRAL MARGIN",
        text2: "กระจายตามปลายแขน ขา มือ เท้า",
        value: "acral",
      },
      {
        key: 5,
        image_name: "dermatomal.png",
        text1: "DERMATOMAL ZOSTERIFORM HERPETIGPRM",
        text2: "กระจายตามเส้นประสาท",
        value: "dermatiomal",
      },
    ];
    const mophology = localStorage.getItem("mophology");
    const shape = localStorage.getItem("shape");
    const arrange = localStorage.getItem("arrange");
    if (
      ((mophology === "erosion" ||
        mophology === "crust" ||
        mophology === "patch") &&
        shape === "coin") ||
      (mophology === "wheal" &&
        shape === "polycyclic" &&
        arrange === "scatter_discrete")
    ) {
      setDistributionItem(
        (distributionItem) =>
          (distributionItem = data.filter((item) => item.key === 1))
      );
    } else if (
      (mophology === "plaque" ||
        mophology === "pustule" ||
        mophology === "scale") &&
      shape === "coin" &&
      arrange === "linear"
    ) {
      setDistributionItem(
        (distributionItem) =>
          (distributionItem = data.filter(
            (item) => item.key === 2 || item.key === 3
          ))
      );
    } else if (
      mophology === "papule" &&
      shape === "coin" &&
      arrange === "grouped_confluent"
    ) {
      setDistributionItem(
        (distributionItem) =>
          (distributionItem = data.filter((item) => item.key === 4))
      );
    } else if (
      ((mophology === "vesicle" && shape === "coin") ||
        (mophology === "scale" && shape === "ring")) &&
      arrange === "scatter_discrete"
    ) {
      setDistributionItem(
        (distributionItem) =>
          (distributionItem = data.filter(
            (item) => item.key === 1 || item.key === 2
          ))
      );
    } else if (
      mophology === "bulla" &&
      shape === "polycyclic" &&
      arrange === "scatter_discrete"
    ) {
      setDistributionItem(
        (distributionItem) =>
          (distributionItem = data.filter((item) => item.key === 5))
      );
    } else if (
      mophology === "abscess" &&
      shape === "coin" &&
      arrange === "scatter_discrete"
    ) {
      setDistributionItem(
        (distributionItem) =>
          (distributionItem = data.filter((item) => item.key === 2))
      );
    }
  }, []);

  return (
    <div>
      <CustomNavBar route="/arrange" title="Distribution" />
      <WingBlank
        size="lg"
        className={
          props.location.state === "back"
            ? "animated slideInLeft"
            : "animated slideInRight"
        }
      >
        <WhiteSpace size="lg" />
        {distributionItem.map((item) => (
          <div
            key={item.key}
            onClick={() => selectItem(item.value, item.text1)}
          >
            <CustomCardItem1
              image={item.image_name}
              text1={item.text1}
              text2={item.text2}
              route="/color"
              imgStyle={imageStyle}
              modalUse
            />
            <WhiteSpace size="lg" />
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
