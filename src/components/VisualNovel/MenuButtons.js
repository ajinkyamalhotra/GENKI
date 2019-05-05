import React from "react";
import KeyHandler, { KEYDOWN, KEYUP } from "react-key-handler";

function MenuButtons(props) {
  function handleToggles(event, value, toggle) {
    return <KeyHandler keyEventName={event} keyValue={value} onKeyHandle={toggle} />;
  }

  return (
    <div className="container menu-buttons-container">
      <div className="menu-buttons">
        <h1 style={{ "color": "rgb(255, 129, 79)", "background-color": "black", "line-height": "215%", "font-size": "155%", "text-align": "center" }}>
          Press "Spacebar" For Menu Buttons
        </h1>
        {handleToggles(KEYDOWN, " ", props.toggleTextBox)}
        {handleToggles(KEYUP, "Enter", props.setNextFrame)}
        {props.isSkipping ? (
          <button onClick={props.stopSkip}>Stop</button>
        ) : (
          <button onClick={props.startSkip}>Skip</button>
        )}

        <button onClick={props.toggleSaveMenu}>{props.saveMenuShown ? "Hide Saves" : "Save"}</button>
        <button onClick={props.toggleLoadMenu}>{props.loadMenuShown ? "Hide Loads" : "Load"}</button>
        <button onClick={props.toggleConfigMenu}>{props.configMenuShown ? "Hide Config" : "Config"}</button>
        <button onClick={props.toggleFullscreen} style={{ float: "right" }}>
          Fullscreen
        </button>
      </div>
    </div>
  );
}

export default MenuButtons;
