import Image from "next/image";
import React from "react";
import { FC } from "react";
import userImage from "../public/images/user.jpg";

interface TalksProps {
  isActive: boolean;
  name: string;
  text: string;
  date: string;
}

const Talks: FC<TalksProps> = ({ isActive, name, text, date }) => {
  return (
    <div className="talks">
      <div className="talks__user">
        <Image src={userImage} alt="" />
        <div
          className={isActive ? "talks__user--online" : "talks__user--offline"}
        ></div>
      </div>
      <div className="talks__body">
        <p className="talks__body--name">{name}</p>
        <p className="talks__body--text">{text}</p>
        <span className="talks__body--date">{date}</span>
      </div>
    </div>
  );
};

export default Talks;
