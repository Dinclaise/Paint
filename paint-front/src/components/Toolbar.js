import React, { useCallback } from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";

import "../styles/toolbar.scss";
import Brush from "./../tools/Brush";
import Rect from "./../tools/Rect";
import Circle from "./../tools/Circle";
import Eraser from "./../tools/Eraser";
import Line from "./../tools/Line";

const Toolbar = (props) => {
  const handleChooseBrush = useCallback(() => {
    return toolState.setTool(new Brush(canvasState.canvas));
  }, []);

  const handleChooseRect = useCallback(() => {
    return toolState.setTool(new Rect(canvasState.canvas));
  }, []);

  const handleChooseCircle = useCallback(() => {
    return toolState.setTool(new Circle(canvasState.canvas));
  }, []);

  const handleChooseEraser = useCallback(() => {
    return toolState.setTool(new Eraser(canvasState.canvas));
  }, []);

  const handleChooseLine = useCallback(() => {
    return toolState.setTool(new Line(canvasState.canvas));
  }, []);

  const handleChooseUndo = useCallback(() => {
    canvasState.undo();
  }, []);

  const handleChooseRedo = useCallback(() => {
    canvasState.redo();
  }, []);

  return (
    <div className={"toolbar"}>
      <button className={"toolbar__btn brush"} onClick={handleChooseBrush} />
      <button className={"toolbar__btn rect"} onClick={handleChooseRect} />
      <button className={"toolbar__btn circle"} onClick={handleChooseCircle} />
      <button className={"toolbar__btn eraser"} onClick={handleChooseEraser} />
      <button className={"toolbar__btn line"} onClick={handleChooseLine} />
      <button className={"toolbar__btn undo"} onClick={handleChooseUndo} />
      <button className={"toolbar__btn redo"} onClick={handleChooseRedo} />
      <button className={"toolbar__btn save"} />
    </div>
  );
};

export default Toolbar;
