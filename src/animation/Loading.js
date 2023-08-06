import React from "react";
import animation from "../animation/lf30_editor_imhk8had.json";
import Lottie from "lottie-react";
const Loading = () => {
  return <Lottie animationData={animation} style={{height: '200px', width: '200px', margin: 'auto'}}/>;
};

export default Loading;
