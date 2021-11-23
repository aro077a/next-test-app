import { AiOutlineAppstore } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { RiRadio2Line } from "react-icons/ri";
import { GoRadioTower } from "react-icons/go";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const leftNavbar = () => {
  return (
    <div className="leftNavbar">
      <div className="leftNavbar__icons">
        <AiOutlineAppstore />
      </div>
      <div className="leftNavbar__icons">
        <BiMessageDetail />
      </div>
      <div className="leftNavbar__icons">
        <BiShareAlt />
      </div>
      <div className="leftNavbar__icons">
        <RiRadio2Line />
      </div>
      <div className="leftNavbar__icons">
        <GoRadioTower />
      </div>
      <div className="leftNavbar__icons">
        <HiOutlineMenuAlt2 />
      </div>
    </div>
  );
};

export default leftNavbar;
