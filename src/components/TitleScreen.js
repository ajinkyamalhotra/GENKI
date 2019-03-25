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
            <span onClick={props.chapterSelection}>GENKI II Chapters</span>
          </li>
          {/*}<li>
            <span onClick={props.chapter3}>Chapter 3</span>
          </li>*/}
          <li>
            <span onClick={props.toggleLoadMenu}>Continue</span>
          </li>
          {/*<li>
          <span>
             <a href="https://github.com/nashkenazy/generic-vn" target="_blank" rel="noopener noreferrer">
               Github
             </a>
            </span>
          </li> */}
          <li />
        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
