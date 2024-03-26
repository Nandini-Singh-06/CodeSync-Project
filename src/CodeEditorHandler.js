import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/worker-javascript';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditorHandler = () => {
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  useEffect(() => {
    // Any initialization logic for the code editor can go here
  }, []);

  const handleCodeChange = (newCode) => {
    // Handle code changes here
    setCode(newCode);
  };

  const handleLanguageChange = (language) => {
    // Handle language changes here
    setSelectedLanguage(language);
  };

  return (
    <div className="code-editor-handler ace-editor">
      <div className="language-selector">
        <label>Select Language:</label>
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="c_cpp">C/C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </div>
      <AceEditor
        mode={selectedLanguage}
        theme="monokai"
        onChange={handleCodeChange}
        value={code}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        placeholder="Enter your code here..."
        width="100%"
        height="100%"
        setOptions={{
          showPrintMargin: false,
          fontSize: 14,
        }}
      />
    </div>
  );
};

export default CodeEditorHandler;
