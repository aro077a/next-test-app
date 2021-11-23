import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Talks from './Talks';
import { talksData } from './talksData';

const RecentTalks = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='recentTalks'>
      <div className='recentTalks__container' onClick={handleOpen}>
        <p>Recent Talks</p>
        <p>
          All{' '}
          <span>
            <RiArrowDropDownLine />
          </span>
        </p>
      </div>
      <Collapse isOpened={isOpen}>
        {talksData.map((talk: any) => {
          return (
            <Talks
              key={talk.id}
              isActive={talk.isActive}
              name={talk.name}
              text={talk.text}
              date={talk.date}
            />
          );
        })}
      </Collapse>
    </div>
  );
};

export default RecentTalks;
