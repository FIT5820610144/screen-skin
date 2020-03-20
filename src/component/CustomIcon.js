import React from "react";

export default function CustomIcon(props) {
  const inline = { display: "inline" };
  return (
    <div style={props.inline && inline}>
      <img src={"/images/" + props.name + ".png"} width={props.size} />
    </div>
  );
}
