import React, { Component } from "react";
import { Auth, API } from "aws-amplify";
import config from '../config';

class SaveLoadMenu extends Component {
  constructor() {
    super(); //constructor init

    this.state = {
      slotNumber: 1,

      Username: '',
      DateCreated: '',
      SlotNumber: 1,
      SaveString: ''
    };

    this.saveGameData = this.saveGameData.bind(this);
    this.loadGameData = this.loadGameData.bind(this);
  }

  /**
   * Function which invokes the saveGame API to saves game progress
   */

  /*saveGameData() {
    console.log('Saving game progress');
    let apiName = 'genki-vn-beta';
    let path = '/save';
    let params = {
      body: {
        saveString: this.state.saveString,
        createdAt: Date.now()
      }
    }
    return API.post(apiName, path, params);
  }*/

  /* Saving game progress onto AWS servers */
async saveGameData(datestring, number, saveStringify) {
  //event.preventDefault();

  let username = this.props.Username;
  this.setState({Username: username});
  let dateCreated = datestring; //this.state.DateCreated;
  let saveSlotNumber = number; //this.state.SlotNumber;
  let saveString = saveStringify; //this.state.SaveString;

  let data = {
    Username: username,
    DateCreated: dateCreated,
    SlotNumber: saveSlotNumber,
    SaveString: saveString
  }
  try {
    await this.savePost(data);
    this.props.history.push("/");
  } catch (e) {
    alert(e);
  }

}

  savePost(data){
    return (API.post('genki-vn-beta', '/save', data));
  }

  async loadGameData(number) {
    let apiName = 'genki-vn-beta';
    let username = this.props.username;
    let path = `/save/${username}`;
    try {
      let save = await API.get(apiName, path);
      console.log(save);
      this.setState({ save: save });
    } catch (e) {
      console.log(e, e.stack);
    }
  }

  swapSlotButtons() {
    let buttonCache = [];
    for (let i = 1; i < 21; i++) {
      let style = {};
      if (this.state.slotNumber === i) {
        style["background-color"] = "rgb(250, 110, 50)";
      } else if (!JSON.parse(this.loadGameData(i))) {
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
        {JSON.parse(this.loadGameData(this.state.slotNumber)).choiceOptions.map(key => (
          <button className="choice-button">{key.content}</button>
        ))}
      </div>
    );
  }

  menuSlot(number) {
    if (JSON.parse(this.loadGameData(this.state.slotNumber))) {
      return (
        <div
          className="save-load-slot"
          onClick={() => {
            if (
              JSON.parse(this.loadGameData(this.state.slotNumber)) &&
              window.confirm(this.props.confirmationMessage)
            ) {
              this.props.executeSlot(this.state.slotNumber);
            } /*else {
              null;
            }*/
          }}
        >
          {JSON.parse(this.loadGameData(this.state.slotNumber)).choicesExist ? this.renderChoiceMenu() : null}
          <a>
            <img
              draggable="false"
              className="slot-bg"
              src={JSON.parse(this.loadGameData(this.state.slotNumber)).bg}
            />
            <img
              draggable="false"
              src={JSON.parse(this.loadGameData(this.state.slotNumber)).spriteLeft}
              className="sprite left"
            />
            <img
              draggable="false"
              src={JSON.parse(this.loadGameData(this.state.slotNumber)).sprite}
              className="sprite"
            />
            <img
              draggable="false"
              src={JSON.parse(this.loadGameData(this.state.slotNumber)).spriteRight}
              className="sprite right"
            />
            {JSON.parse(this.loadGameData(this.state.slotNumber)).text && this.props.textBoxShown ? (
              <div
                className="text-box"
                style={{
                  fontFamily: JSON.parse(this.loadGameData(this.state.slotNumber)).font
                }}
              >
                {JSON.parse(this.loadGameData(this.state.slotNumber)).speaker ? (
                  <div className="speaker">{JSON.parse(this.loadGameData(this.state.slotNumber)).speaker}</div>
                ) : null}
                <div className="text">{JSON.parse(this.loadGameData(this.state.slotNumber)).text}</div>
              </div>
            ) : null}
          </a>
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
            <a>{this.props.menuType}</a>
          </li>
          <li className="exit-button" onClick={this.props.toggleMenu}>
            <a>&times;</a>
          </li>
        </ul>
        {this.menuSlot(this.state.slotNumber)}
        <div className="slot-date">{this.loadGameData("time" + this.state.slotNumber)}</div>
        {this.swapSlotButtons()}
      </div>
    );
  }
}
export default SaveLoadMenu;
