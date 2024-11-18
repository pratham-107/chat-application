import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ChatBox />
      </div>
    </div>
  );
};

export default App;
