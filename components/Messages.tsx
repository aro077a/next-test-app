import Image from 'next/image';
import userImage from '../public/images/user.jpg';
import { chatData } from './chatData';
import Message from './Message';
import { CgAttachment } from 'react-icons/cg';
import { GrEmoji } from 'react-icons/gr';
import { RiSendPlaneFill } from 'react-icons/ri';

const Messages = () => {
  return (
    <div className='messages'>
      <div className='messages__header'>
        <Image src={userImage} alt='user' />
        <p>Jason Roy</p>
      </div>
      <div className='messages__container'>
        {chatData.map((message: any) => {
          return (
            <Message
              key={message.id}
              message={message.message}
              date={message.date}
            />
          );
        })}
      </div>
      <div className='messages__input'>
        <div className='messages__input--icons'>
          <CgAttachment />
          <GrEmoji />
        </div>
        <input
          type='text'
          placeholder='Type a messsage'
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = 'Type Message')}
        />
        <RiSendPlaneFill className='messages__input--sendIcon' />
      </div>
    </div>
  );
};

export default Messages;
