import React, { useState } from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";

import "../styles/toolbar.scss";
import Brush from "./../tools/Brush";
import Rect from "./../tools/Rect";
import Circle from "./../tools/Circle";

const Toolbar = (props) => {
  const [filled, setFilled] = useState(false);

  const handleChooseBrush = () => {
    return toolState.setTool(new Brush(canvasState.canvas));
  };

  const handleChooseRect = () => {
    return toolState.setTool(new Rect(canvasState.canvas));
  };

  const handleChooseCircle = () => {
    return toolState.setTool(new Circle(canvasState.canvas));
  };

  return (
    <div className={"toolbar"}>
      <button className={"toolbar__btn brush"} onClick={handleChooseBrush} />
      <button className={"toolbar__btn rect"} onClick={handleChooseRect} />
      <button className={"toolbar__btn circle"} onClick={handleChooseCircle} />
      <button className={"toolbar__btn eraser"} />
      <button className={"toolbar__btn line"} />
      {/* <button className={"toolbar__btn palitra"} /> */}
      <input className={"toolbar__palitra"} type="color" />
      <button className={"toolbar__btn undo"} />
      <button className={"toolbar__btn redo"} />
      <button className={"toolbar__btn save"} />
    </div>
  );
};

export default Toolbar;
