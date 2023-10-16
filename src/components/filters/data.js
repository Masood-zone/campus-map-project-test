import { FaBed, FaBuilding } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { BsPlus } from "react-icons/bs";
import ATM from "../../assets/svgs/atm-icon.svg";

export const FILTERS = [
  {
    id: 1,
    title: "hostels",
    icon: <FaBed fontSize={21} />,
  },
  {
    id: 2,
    title: "faculties",
    icon: <FaBuilding fontSize={21} />,
  },
  {
    id: 3,
    title: "eatries",
    icon: <PiForkKnifeFill fontSize={21} />,
  },
  {
    id: 4,
    title: "ATM",
    icon: <img src={ATM} alt="atm-icon" className="w-[33px] h-[22px]" />,
  },
  {
    id: 5,
    title: "More Filters",
    icon: <BsPlus fontSize={21} />,
  },
];
