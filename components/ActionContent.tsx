import { FiMail } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import userImage from "../public/images/user.jpg";
import Image from "next/image";

const ActionContent = () => {
  return (
    <div className="actionContent">
      <div className="actionContent__icon">
        <FiMail />
      </div>
      <div className="actionContent__icon">
        <BiBell />
      </div>
      <div className="actionContent__image">
        <Image src={userImage} alt="" />
      </div>
      <div className="actionContent__dropdown">
        <p>Bold Masi</p>
      </div>
    </div>
  );
};

export default ActionContent;
