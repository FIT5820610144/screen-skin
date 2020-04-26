import React, { useState, useEffect } from "react";
import CustomNavBar from "./../component/CustomNavBar";
import { WingBlank, WhiteSpace, Grid, Button } from "antd-mobile";
import { useHistory } from "react-router-dom";
import CustomIcon from "./../component/CustomIcon";

export default function Picture(props) {
  const history = useHistory();
  function goNext() {
    history.push("/result");
  }

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const data = [
      {
        disease: "abscess",
        img: [
          {
            name: "AB1",
            path: "/images/disease/Abscess/AB1.png",
          },
          {
            name: "AB2",
            path: "/images/disease/Abscess/AB2.png",
          },
        ],
      },
      {
        disease: "chickenpox",
        img: [
          {
            name: "CH1",
            path: "/images/disease/Chickenpox/CH1.png",
          },
        ],
      },
      {
        disease: "herpessimplex",
        img: [
          {
            name: "HS1",
            path: "/images/disease/HerpesSimple/HS1.png",
          },
          {
            name: "HS2",
            path: "/images/disease/HerpesSimple/HS2.png",
          },
          {
            name: "HS3",
            path: "/images/disease/HerpesSimple/HS3.png",
          },
          {
            name: "HS4",
            path: "/images/disease/HerpesSimple/HS4.png",
          },
        ],
      },
      {
        disease: "impetigo",
        img: [
          {
            name: "IM1",
            path: "/images/disease/Impetigo/IM1.png",
          },
          {
            name: "IM2",
            path: "/images/disease/Impetigo/IM2.png",
          },
          {
            name: "IM3",
            path: "/images/disease/Impetigo/IM3.png",
          },
          {
            name: "IM4",
            path: "/images/disease/Impetigo/IM4.png",
          },
        ],
      },
      {
        disease: "pityriasis_versicolor",
        img: [
          {
            name: "PV1",
            path: "/images/disease/PityriasisVersicolor/PV1.png",
          },
          {
            name: "PV2",
            path: "/images/disease/PityriasisVersicolor/PV2.png",
          },
          {
            name: "PV3",
            path: "/images/disease/PityriasisVersicolor/PV3.png",
          },
        ],
      },
      {
        disease: "psoriasis",
        img: [
          {
            name: "PS1",
            path: "/images/disease/Psoriasis/PS1.png",
          },
          {
            name: "PS2",
            path: "/images/disease/Psoriasis/PS2.png",
          },
          {
            name: "PS3",
            path: "/images/disease/Psoriasis/PS3.png",
          },
          {
            name: "PS4",
            path: "/images/disease/Psoriasis/PS4.png",
          },
        ],
      },
      {
        disease: "ringworm",
        img: [
          {
            name: "RW1",
            path: "/images/disease/RingWorm/RW1.png",
          },
          {
            name: "RW2",
            path: "/images/disease/RingWorm/RW2.png",
          },
          {
            name: "RW3",
            path: "/images/disease/RingWorm/RW3.png",
          },
        ],
      },
      {
        disease: "scabies",
        img: [
          {
            name: "SC1",
            path: "/images/disease/Scarbies/SC1.png",
          },
          {
            name: "SC2",
            path: "/images/disease/Scarbies/SC2.png",
          },
        ],
      },
      {
        disease: "urticaria",
        img: [
          {
            name: "UR1",
            path: "/images/disease/Urticaria/UR1.png",
          },
          {
            name: "UR2",
            path: "/images/disease/Urticaria/UR2.png",
          },
        ],
      },
      {
        disease: "warts",
        img: [
          {
            name: "WA1",
            path: "/images/disease/Warts/WA1.png",
          },
          {
            name: "WA2",
            path: "/images/disease/Warts/WA2.png",
          },
        ],
      },
    ];
    const mophology = localStorage.getItem("mophology");
    const shape = localStorage.getItem("shape");
    const arrange = localStorage.getItem("arrange");
    const distribution = localStorage.getItem("distribution");
    const color = localStorage.getItem("color");
    const anatomical = localStorage.getItem("anatomical");

    const showImage = (disease) => {
      localStorage.setItem("disease", disease);
      data.filter((item) => {
        if (item.disease === disease) {
          setImageList((imageList) => (imageList = item.img));
        }
        return item;
      });
    };

    if (
      ((mophology === "erosion" || mophology === "crust") &&
        shape === "coin" &&
        arrange === "scatter_discrete" &&
        distribution === "generalized" &&
        color === "red" &&
        anatomical === "face") ||
      (color === "yellow" && anatomical === "handnfoot")
    ) {
      showImage("impetigo");
    } else if (
      (mophology === "plaque" ||
        mophology === "pustule" ||
        mophology === "scale") &&
      shape === "coin" &&
      arrange === "linear" &&
      (distribution === "intertriginous" || distribution === "bilateral") &&
      color === "red" &&
      (anatomical === "elbow" || anatomical === "palmnsole")
    ) {
      showImage("psoriasis");
    } else if (
      mophology === "papule" &&
      shape === "coin" &&
      arrange === "grouped_confluent" &&
      distribution === "acral" &&
      (color === "red" || color === "skin") &&
      anatomical === "palmnsole"
    ) {
      showImage("warts");
    } else if (
      mophology === "patch" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized" &&
      color === "white" &&
      anatomical === "sweat"
    ) {
      showImage("pityriasis_versicolor");
    } else if (
      (mophology === "vesicle" &&
        shape === "coin" &&
        arrange === "scatter_discrete" &&
        distribution === "generalized" &&
        color === "clear" &&
        anatomical === "elbow") ||
      (distribution === "intertriginous" &&
        color === "red" &&
        anatomical === "prong")
    ) {
      showImage("scabies");
    } else if (
      mophology === "scale" &&
      shape === "ring" &&
      arrange === "scatter_discrete" &&
      (distribution === "generalized" || distribution === "intertriginous") &&
      color === "red" &&
      (anatomical === "face" ||
        anatomical === "body" ||
        anatomical === "handnfoot")
    ) {
      showImage("ringworm");
    } else if (
      mophology === "bulla" &&
      shape === "polycyclic" &&
      arrange === "scatter_discrete" &&
      distribution === "dermatiomal" &&
      color === "clear" &&
      (anatomical === "mount" || anatomical === "sex")
    ) {
      showImage("herpessimplex");
    } else if (
      mophology === "vesicle" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized" &&
      color === "clear" &&
      (anatomical === "face" || anatomical === "body" || anatomical === "lymph")
    ) {
      showImage("chickenpox");
    } else if (
      mophology === "wheal" &&
      shape === "polycyclic" &&
      arrange === "scatter_discrete" &&
      distribution === "generalized" &&
      color === "red" &&
      (anatomical === "face" ||
        anatomical === "body" ||
        anatomical === "armnleg")
    ) {
      showImage("urticaria");
    } else if (
      mophology === "abscess" &&
      shape === "coin" &&
      arrange === "scatter_discrete" &&
      distribution === "intertriginous" &&
      color === "red" &&
      (anatomical === "head" || anatomical === "armnleg")
    ) {
      showImage("abscess");
    }
  }, []);

  const [imageSelected, setimageSelected] = useState([]);

  const handleClick = (val) => {
    setimageSelected([...imageSelected, val]);
  };

  const unSelect = (val) => {
    setimageSelected(imageSelected.filter((item) => item !== val));
  };

  return (
    <div>
      <CustomNavBar
        route="/anatomicalsite"
        title="เลือกรูปภาพที่ใกล้เคียงมากที่สุด"
      />
      <WingBlank
        size="lg"
        className={
          props.location.state === "back"
            ? "animated slideInLeft"
            : "animated slideInRight"
        }
      >
        <WhiteSpace />
        <WhiteSpace />
        <Grid
          className="custom-grid"
          data={imageList}
          columnNum={3}
          renderItem={(dataItem, i) => (
            <div className="grid-img-container">
              <WhiteSpace />
              <img
                src={dataItem.path}
                width="100"
                alt=""
                className="grid-item"
                onClick={() => handleClick(dataItem.name)}
              />
              {imageSelected.map(
                (item, i) =>
                  item === dataItem.name && (
                    <div
                      key={i}
                      className="checked-icon"
                      onClick={() => unSelect(dataItem.name)}
                    >
                      <div className="animated tada">
                        <CustomIcon name="check-icon" size="20" />
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
          itemStyle={{ height: "120px" }}
        />
        <WhiteSpace />
        <Button
          className="result-button"
          disabled={imageSelected.length === 0 && true}
          onClick={goNext}
        >
          เรียบร้อย
        </Button>
      </WingBlank>
    </div>
  );
}
