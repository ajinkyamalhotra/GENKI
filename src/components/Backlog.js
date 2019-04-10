import React, { Component } from "react";
import story from "../story/story";

class Backlog extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  handleJump(index, i, choicesIndex) {
    this.props.toggleBacklog();

    this.props.setChoice(choicesIndex);
    this.props.setChoicesHistory(this.props.choicesHistory.slice(0, i));

    this.props.setFrame(index);
    this.props.setIndexHistory(this.props.indexHistory.slice(0, i));

    this.props.setChoicesStore(this.props.choicesHistory[i]);
    this.props.setChoicesHistory(this.props.choicesHistory.slice(0, i));
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView();
  }

  render() {
    let textHistory = [];
    const indexHistory = this.props.indexHistory;
    const choicesIndexHistory = this.props.choicesIndexHistory;

    for (let i = 0; i < indexHistory.length; i++) {
      const index = indexHistory[i];
      const choicesIndex = choicesIndexHistory[i];

      let lastIndex = story.length - 1;
      if(story[index] != story[lastIndex]){
        textHistory.push(
          <div className="backlog" key={i}>
            <div className="backlog-jump-container" onClick={() => this.handleJump(index, i, 0)}>
              <span className="backlog-jump-text">Jump</span>
            </div>
            <div className="backlog-speaker">{story[index].speaker}</div>
            {story[index].text}
          </div>
        );
      }
    }
    return (
      <div className="overlay backlog-overlay">
        {textHistory}
        <ul className="header backlog-header" ref={el => (this.messagesEnd = el)}>
          <li>
            <h1>Backlog</h1>
          </li>
          <li className="exit-button backlog-exit" onClick={this.props.toggleBacklog}>
            <h1 style={{paddingRight:"10px"}}>X</h1>
          </li>
        </ul>
      </div>
    );
  }
}

export default Backlog;
