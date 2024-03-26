import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import './CodeEditorPage.css';
import CodeEditorHandler from './CodeEditorHandler'; 

function NavigationMenu() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showInputOutput, setShowInputOutput] = useState(false); // State to manage visibility of input/output section

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // const handleRunClick = async () => {
    
  // };

  const toggleInputOutput = () => {
    setShowInputOutput(!showInputOutput); // Toggle the visibility state
  };

  return (
    <div className="navigation-menu">
      <ul>
        <li><a href="#askai">Ask AI</a></li>
        <li><a href="#in&ou" onClick={toggleInputOutput}>Input & Output</a></li>
        <li><a href="#chatroom">ChatRoom</a></li>
      </ul>
      {showInputOutput && (
        <div className="input-output-section">
          <textarea
            className="input-textarea"
            placeholder="Enter input here..."
            value={input}
            onChange={handleInputChange}
          ></textarea>
          {/* <button className="executerun-button" onClick={handleRunClick}>Execute</button> */}
          <textarea
            className="output-textarea"
            placeholder="Output will be displayed here..."
            value={output}
            readOnly
          ></textarea>
        </div>
      )}
    </div>
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
            <CodeEditorHandler />
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