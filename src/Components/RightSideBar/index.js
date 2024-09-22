import React, { useState } from "react";
import "./index.css";

const RightSideBar = ({ toggle }) => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSend = () => {
    setChatHistory([...chatHistory, { user: userInput, bot: "Hello" }]);
    setUserInput("");
  };

  return (
    <div>
      <button onClick={toggle}>Back</button>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <div>User: {chat.user}</div>
            <div>Bot: {chat.bot}</div>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        // onKeyPress={(event) => {
        //   if (event.key === "Enter") handleSend();
        // }}
      />
    </div>
  );
};

export default RightSideBar;