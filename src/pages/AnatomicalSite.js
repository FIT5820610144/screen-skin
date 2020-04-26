import React, { useState, useEffect } from "react";
import CustomNavBar from "./../component/CustomNavBar";
import CustomCardItem1 from "./../component/CustomCardItem1";
import { WingBlank, WhiteSpace } from "antd-mobile";

export default function AnatomicalSite(props) {
  const selectItem = (val, name) => {
    localStorage.setItem("anatomical", val);
  };

  const [anatomyItem, setAnatomyItem] = useState([]);
  useEffect(() => {
    const data = [
      {
        key: 1,
        image_name: "face.png",
        text1: "ใบหน้า",
        text2: "",
        value: "face",
      },
      {
        key: 2,
        image_name: "handfoot.png",
        text1: "มือและเท้า",
        text2: "",
        value: "handnfoot",
      },
      {
        key: 3,
        image_name: "arm.png",
        text1: "ข้อศอก",
        text2: "",
        value: "elbow",
      },
      {
        key: 4,
        image_name: "foothand.png",
        text1: "ฝ่ามือและฝ่าเท้า",
        text2: "",
        value: "palmnsole",
      },
      {
        key: 5,
        image_name: "sweat.png",
        text1: "บริเวณที่มีต่อมเหงื่ออยู่มาก",
        text2: "ได้แก่ แผ่นหลัง คอ หน้าอก เป็นต้น",
        value: "sweat",
      },
      {
        key: 6,
        image_name: "prong.png",
        text1: "ง่ามมือง่ามเท้า",
        text2: "",
        value: "prong",
      },
      {
        key: 7,
        image_name: "body.png",
        text1: "ลําตัว",
        text2: "",
        value: "body",
      },
      {
        key: 8,
        image_name: "mouth.png",
        text1: "ปาก",
        text2: "",
        value: "mount",
      },
      {
        key: 9,
        image_name: "sex.png",
        text1: "อวัยวะเพศ",
        text2: "",
        value: "sex",
      },
      {
        key: 10,
        image_name: "lymph.png",
        text1: "ต่อมน้ำเหลือง",
        text2: "",
        value: "lymph",
      },
      {
        key: 11,
        image_name: "armnleg.png",
        text1: "แขนและขา",
        text2: "",
        value: "armnleg",
      },
      {
        key: 12,
        image_name: "head.png",
        text1: "ศีรษะ",
        text2: "",
        value: "head",
      },
    ];
    const mophology = localStorage.getItem("mophology");
    const shape = localStorage.getItem("shape");
    const arrange = localStorage.getItem("arrange");
    const distribution = localStorage.getItem("distribution");
    const color = localStorage.getItem("color");
    if (
      (mophology === "erosion" || mophology === "crust") &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized" &&
      color === "red"
    ) {
      setAnatomyItem(
        (anatomyItem) => (anatomyItem = data.filter((item) => item.key === 1))
      );
    } else if (
      (mophology === "erosion" || mophology === "crust") &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized" &&
      color === "yellow"
    ) {
      setAnatomyItem(
        (anatomyItem) => (anatomyItem = data.filter((item) => item.key === 2))
      );
    } else if (
      (mophology === "plaque" ||
        mophology === "pustule" ||
        mophology === "scale") &&
      shape === "coin" &&
      arrange === "linear" &&
      (distribution === "intertriginous" || distribution === "bilateral") &&
      color === "red"
    ) {
      setAnatomyItem(
        (anatomyItem) =>
          (anatomyItem = data.filter(
            (item) => item.key === 3 || item.key === 4
          ))
      );
    } else if (
      mophology === "papule" &&
      shape === "coin" &&
      arrange === "grouped_confluent" &&
      distribution === "acral" &&
      (color === "red" || color === "skin")
    ) {
      setAnatomyItem(
        (anatomyItem) => (anatomyItem = data.filter((item) => item.key === 4))
      );
    } else if (
      mophology === "patch" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized" &&
      color === "white"
    ) {
      setAnatomyItem(
        (anatomyItem) => (anatomyItem = data.filter((item) => item.key === 5))
      );
    } else if (
      mophology === "vesicle" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized" &&
      color === "clear"
    ) {
      setAnatomyItem(
        (anatomyItem) =>
          (anatomyItem = data.filter(
            (item) =>
              item.key === 1 ||
              item.key === 3 ||
              item.key === 7 ||
              item.key === 10
          ))
      );
    } else if (
      mophology === "vesicle" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "intertriginous" &&
      color === "red"
    ) {
      setAnatomyItem(
        (anatomyItem) => (anatomyItem = data.filter((item) => item.key === 6))
      );
    } else if (
      mophology === "scale" &&
      shape === "ring" &&
      arrange === "scatter_discrete" &&
      (distribution === "generalized" || distribution === "intertriginous") &&
      color === "red"
    ) {
      setAnatomyItem(
        (anatomyItem) =>
          (anatomyItem = data.filter(
            (item) => item.key === 1 || item.key === 2 || item.key === 7
          ))
      );
    } else if (
      mophology === "vesicle" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "intertriginous" &&
      color === "red"
    ) {
      setAnatomyItem(
        (anatomyItem) => (anatomyItem = data.filter((item) => item.key === 6))
      );
    } else if (
      mophology === "bulla" &&
      shape === "polycyclic" &&
      arrange === "scatter_discrete" &&
      distribution === "dermatiomal" &&
      color === "clear"
    ) {
      setAnatomyItem(
        (anatomyItem) =>
          (anatomyItem = data.filter(
            (item) => item.key === 8 || item.key === 9
          ))
      );
    } else if (
      mophology === "wheal" &&
      shape === "polycyclic" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized" &&
      color === "red"
    ) {
      setAnatomyItem(
        (anatomyItem) =>
          (anatomyItem = data.filter(
            (item) => item.key === 1 || item.key === 7 || item.key === 11
          ))
      );
    } else if (
      mophology === "abscess" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "intertriginous" &&
      color === "red"
    ) {
      setAnatomyItem(
        (anatomyItem) =>
          (anatomyItem = data.filter(
            (item) => item.key === 11 || item.key === 12
          ))
      );
    }
  }, []);
  return (
    <div>
      <CustomNavBar route="/color" title="Anatomical Site" />

      <WingBlank
        size="lg"
        className={
          props.location.state === "back"
            ? "animated slideInLeft"
            : "animated slideInRight"
        }
      >
        <WhiteSpace size="lg" />
        {anatomyItem.map((item) => (
          <div
            key={item.key}
            onClick={() => selectItem(item.value, item.text1)}
          >
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
