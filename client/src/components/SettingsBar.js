import React from "react";
import toolState from "../store/toolState";

import "../styles/settings-bar.scss";

const SettingsBar = (props) => {
  const handleChangeLineWidth = (e) => {
    const value = e.target.value;

    toolState.setLineWidth(value);
  };

  const handleChooseFillColor = (e) => {
    const value = e.target.value;

    toolState.setFillColor(value);
  };

  const handleChooseStrokeColor = (e) => {
    const value = e.target.value;

    toolState.setStrokeColor(value);
  };

  return (
    <div className={"settings-bar"}>
      <label htmFor="line-width">Толщина линии</label>
      <input
        className={"settings-bar__line-width"}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
        onChange={(e) => handleChangeLineWidth(e)}
      />

      <label htmlFor={"fill-color"}>Основной цвет</label>
      <input
        className={"settings-bar__fill-color"}
        onChange={(e) => handleChooseFillColor(e)}
        type="color"
      />

      <label htmlFor={"stroke-color"}>Цвет обводки</label>
      <input
        className={"settings-bar__stroke-color"}
        onChange={(e) => handleChooseStrokeColor(e)}
        type="color"
      />
    </div>
  );
};

export default SettingsBar;
