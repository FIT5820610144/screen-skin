import React from "react";
import { Steps, WingBlank, WhiteSpace } from "antd-mobile";
const Step = Steps.Step;
export default function CustomStep(props) {
  const mophology = localStorage.getItem("mophology");
  const mophology_name = localStorage.getItem("mophology_name");
  const shape = localStorage.getItem("shape");
  const shape_name = localStorage.getItem("shape_name");
  const arrange = localStorage.getItem("arrange");
  const arrange_name = localStorage.getItem("arrange_name");

  const distribution = localStorage.getItem("distribution");
  const distribution_name = localStorage.getItem("distribution_name");

  const color = localStorage.getItem("color");
  const color_name = localStorage.getItem("color_name");

  const anatomical = localStorage.getItem("anatomical");
  const anatomical_name = localStorage.getItem("anatomical_name");

  const customIcon = number => (
    // <img src={"/images/" + getType + ".png"} className="step-icon " />
    <div className="step-icon">{number}</div>
  );
  return (
    <div>
      <WingBlank mode={20} className="stepsExample">
        <WhiteSpace />
        <Steps direction="horizontal" size="small">
          {props.mophology && (
            <Step status="finish" title={mophology_name} icon={customIcon(1)} />
          )}
          {props.shape && (
            <Step status="finish" title={shape_name} icon={customIcon(2)} />
          )}
          {props.arrange && (
            <Step status="finish" title={arrange_name} icon={customIcon(3)} />
          )}
        </Steps>
        <Steps direction="horizontal" size="small">
          {props.distribution && (
            <Step
              status="finish"
              title={distribution_name}
              icon={customIcon(4)}
            />
          )}
          {props.color && (
            <Step status="finish" title={color_name} icon={customIcon(5)} />
          )}
          {props.anatomical && (
            <Step
              status="finish"
              title={anatomical_name}
              icon={customIcon(6)}
            />
          )}
        </Steps>
      </WingBlank>
    </div>
  );
}
