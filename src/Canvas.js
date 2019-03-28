import React from "react";

const canvas = (props) => {
  let style = {
    backgroundColor: `${props.color}`,
    position:"absolute",
    top:`${props.top}px`,
    left:`${props.left}px`,
    width: `${props.width}px`,
    height: `${props.height}px`
  };
  console.log(style)
  return <div style={style}></div>
  //return <div></div>
}

export default canvas;
