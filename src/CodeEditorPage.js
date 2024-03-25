import React from 'react';
import SplitPane from 'react-split-pane';
import './CodeEditorPage.css';

function NavigationMenu() {
  return (
    <ul>
      <li><a href="#askai">Ask AI</a></li>
      <li><a href="#in&ou">Input & Output</a></li>
      <li><a href="#chatroom"> ChatRoom</a></li>
    </ul>
  );
}

function TopNavigationBar() {
  return (
    <div className="top-nav">
      <div className="left-section">
        <div className="logo-container">
          <img src="codelogo.png" alt="Logo" className="logo" />
          <span className="title">CodeSync</span>
        </div>
      </div>
      <div className="center-section">
        <div className="run-button">
          <button>Run</button>
        </div>
      </div>
      <div className="right-section">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Logout</a>
        </div>
        <div className="human-logo">
          <img src="human-logo.jpg" alt="Logo" className="humanlogo" />
        </div>
      </div>
    </div>
  );
}




function CodeEditorPage() {
  return (
    <div className="CodeEditorPage">
      <TopNavigationBar />
      <div className="content">
        <SplitPane split="vertical" defaultSize="25%">
          <div className="pane1"></div>
          <SplitPane split="vertical" defaultSize="50%">
            <div>Pane 2</div>
            <div className="pane3">
              <NavigationMenu />
            </div>
          </SplitPane>
        </SplitPane>
      </div>
    </div>
  );
}

export default CodeEditorPage;
