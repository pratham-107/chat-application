import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} text={msg.text} />
        ))}
      </div>
      <ChatInput addMessage={addMessage} />
    </div>
  );
};

export default ChatBox;
