import React from 'react';
import Messages from './Messages';
import RecentTalks from './RecentTalks';
import Search from './Search';

const Chat = () => {
  return (
    <div className='chat'>
      <div>
        <Search />
        <RecentTalks />
      </div>
      <Messages />
    </div>
  );
};

export default Chat;
