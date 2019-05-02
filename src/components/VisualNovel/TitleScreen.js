import React from "react";

function TitleScreen(props) {
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        <div id="logo">GENKI Visual Novel</div>
        <ul id="menu">

          <li>
            <span onClick={props.beginStory}>Play</span>
          </li>

          <li>
            <span onClick={props.chapterSelection}>GENKI Chapters</span>
          </li>

          <li>
            <span onClick={props.toggleLoadMenu}>Continue</span>
          </li>

          <li>
            <span onClick={props.credits}>Credits</span>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
