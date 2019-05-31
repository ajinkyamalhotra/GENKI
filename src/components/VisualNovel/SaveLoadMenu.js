import React, { Component } from "react";
import config from '../../config';
import { API } from "aws-amplify";

class SaveLoadMenu extends Component {
  constructor() {
    super(); //constructor init

    this.state = {
      slotNumber: 1
    };
  }

  /**
   * Function which invokes the saveGame API to saves game progress
   */
  saveGameData() {
    console.log('Saving game progress');
    let apiName = config.API_NAME;
    let path = '/save';
    let params = {
      body: {
        saveString: this.state.saveString,
        createdAt: Date.now()
      }
    };
    return API.post(apiName, path, params);
  }

  swapSlotButtons() {
    let buttonCache = [];
    for (let i = 1; i < 21; i++) {
      let style = {};
      if (this.state.slotNumber === i) {
        style["background-color"] = "rgb(250, 110, 50)";
      } else if (!JSON.parse(localStorage.getItem(i))) {
        style["background-color"] = "gray";
      }
      buttonCache.push(
        <button className="save-load-btn" onClick={() => this.setState({ slotNumber: i })} style={style}>
          {i}
        </button>
      );
    }

    return <div className="save-load-buttons">{buttonCache}</div>;
  }

  renderChoiceMenu() {
    return (
      <div className="overlay-choices overlay-choices-slot">
        {JSON.parse(localStorage.getItem(this.state.slotNumber)).choiceOptions.map(key => (
          <button className="choice-button">{key.content}</button>
        ))}
      </div>
    );
  }

  menuSlot(number) {
    if (JSON.parse(localStorage.getItem(this.state.slotNumber))) {
      return (
        <div
          className="save-load-slot"
          onClick={() => {
            if (
              JSON.parse(localStorage.getItem(this.state.slotNumber)) &&
              window.confirm(this.props.confirmationMessage)
            ) {
              this.props.executeSlot(this.state.slotNumber);
            } /*else {
              null;
            }*/
          }}
        >
          {JSON.parse(localStorage.getItem(this.state.slotNumber)).choicesExist ? this.renderChoiceMenu() : null}
            <img
              alt="Backgroud"
              draggable="false"
              className="slot-bg"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).bg}
            />
            <img
              alt="Left Sprite"
              draggable="false"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).spriteLeft}
              className="sprite left"
            />
            <img
              alt=""
              draggable="false"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).sprite}
              className="sprite"
            />
            <img
              alt=""
              draggable="false"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).spriteRight}
              className="sprite right"
            />
            {JSON.parse(localStorage.getItem(this.state.slotNumber)).text && this.props.textBoxShown ? (
              <div
                className="text-box"
                style={{
                  fontFamily: JSON.parse(localStorage.getItem(this.state.slotNumber)).font
                }}
              >
                {JSON.parse(localStorage.getItem(this.state.slotNumber)).speaker ? (
                  <div className="speaker">{JSON.parse(localStorage.getItem(this.state.slotNumber)).speaker}</div>
                ) : null}
                <div className="text">{JSON.parse(localStorage.getItem(this.state.slotNumber)).text}</div>
              </div>
            ) : null}
        </div>
      );
    } else {
      return <div className="save-load-slot empty" onClick={() => this.props.executeSlot(this.state.slotNumber)} />;
    }
  }

  render() {
    return (
      <div className="overlay overlay-save-load">
        <ul className="header">
          <li>
            <h1>{this.props.menuType}</h1>
          </li>
          <li style={{paddingLeft: "24%"}}>
            <h1 style={{transform: "scale(0.800)"}}>Click on the Container Box to Save/Load</h1>
          </li>
          <li className="exit-button" onClick={this.props.toggleMenu}>
            <h1 style={{paddingRight: "10px"}}>X</h1>
          </li>
        </ul>
        {this.menuSlot(this.state.slotNumber)}
        <div className="slot-date">{localStorage.getItem("time" + this.state.slotNumber)}</div>
        {this.swapSlotButtons()}
      </div>
    );
  }
}
export default SaveLoadMenu;
