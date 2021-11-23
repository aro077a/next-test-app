import Image from 'next/image';
import { FC } from 'react';
import userImage from '../public/images/user.jpg';
import { FcCheckmark } from 'react-icons/fc';

interface MessageProps {
  message: string;
  date: string;
}

const Message: FC<MessageProps> = ({ message, date }) => {
  return (
    <div className='message'>
      <div className='message__image'>
        <Image src={userImage} alt='user' />
      </div>
      <div className='message__content'>
        <p className='message__content--text'>{message}</p>
        <p className='message__content--date'>
          {date} <FcCheckmark />
        </p>
      </div>
    </div>
  );
};

export default Message;
