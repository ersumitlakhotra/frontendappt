import React, {useEffect,useState} from 'react';
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineEventAvailable,
  MdSupportAgent
} from 'react-icons/md';
import {SiAlgorand} from 'react-icons/si';
import {CiCircleList , CiSettings} from 'react-icons/ci';
import {RxDashboard} from 'react-icons/rx';


const MenuItems = [
  getItem ('Dashboard', 1, <RxDashboard />),
  getItem ('Order', 2, <CiCircleList />),
  getItem ('Events', 3, <MdOutlineEventAvailable />),
  getItem ('Support', 4, <MdSupportAgent />),
  getItem ('Setting', 5, <CiSettings />),
];

function getItem (label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Sidebar = ({screen}) => {
  const [open, setOpen] = useState (true);
useEffect (
  () => {
    if ((screen === "md" || screen === "sm")) {
      setOpen(false)
    }
    else
    {
      setOpen(true)
    }
  },
  [screen]
);
  return (
    <div
      className={`h-screen border-2 p-3 relative shadow duration-300 ${open ? 'w-72' : 'w-16'}`}
    >
      <MdOutlineKeyboardDoubleArrowLeft
        className={`text-2xl absolute -right-3 top-5 rounded bg-white border shadow-md cursor-pointer  ${!open && 'rotate-180'}`}
        onClick={() => setOpen (!open)}
      />

      {/* Header : logo and Company name */}
      <div className="inline-flex gap-2 items-center h-12 mb-3 ml-1">
        <SiAlgorand className="text-3xl text-slate-700" />
        <h1 className={`font-bold text-slate-500 origin-left duration-300 ${!open && 'scale-0'}`}>
          Appointment
        </h1>
      </div>

      {/* Search bar
      <div
        className={`border bg-gray-50 mt-4 flex items-center gap-2 p-1 rounded-lg `}
      >
        <BiSearchAlt className="text-2xl text-slate-500" />
        <input
          type="text"
          className={`cursor-text bg-transparent focus:outline-none text-sm ${!open && 'hidden'} `}
          placeholder="search"
        />
      </div>
      
      */}

      {/* Add MenuItems*/}

      {MenuItems.map (item => (
          <ul
            key={item.key}
            className="flex gap-2 p-2 items-center cursor-pointer rounded-xl text-slate-800 hover:text-white hover:bg-slate-500 hover:border-l-2"
          >
            <span className="text-xl">
              {item.icon}
            </span>
            <p className={`text-sm font-semibold duration-150 ${!open && 'scale-0'}`}>{item.label}</p>

          </ul>
      ))}
    </div>
  );
};

export default Sidebar;
