import React, {useState} from 'react';
import {
  MdDashboard,
  MdOutlineKeyboardDoubleArrowLeft,
  MdFormatAlignLeft,
} from 'react-icons/md';
import {BiSearchAlt} from 'react-icons/bi';
import {RiScissorsLine} from 'react-icons/ri';

const MenuItems = [
  getItem ('GENERAL', 1, '', '', 'true'),
  getItem ('Dashboard', 2, <MdDashboard />),
  getItem ('Order', 3, <MdFormatAlignLeft />),
];

function getItem (label, key, icon, children, header) {
  return {
    key,
    icon,
    children,
    label,
    header,
  };
}

const Sidebar = () => {
  const [open, setOpen] = useState (true);

  return (
    <div
      className={`h-screen border-2 p-4 relative shadow-xl duration-300 ${open ? 'w-60' : 'w-20'}`}
    >
      <MdOutlineKeyboardDoubleArrowLeft
        className={`text-2xl absolute -right-3 top-5 rounded bg-white border shadow-md cursor-pointer  ${!open && 'rotate-180'}`}
        onClick={() => setOpen (!open)}
      />

      {/* Header : logo and Company name */}
      <div className="inline-flex gap-2 items-center">
        <RiScissorsLine className="text-3xl text-slate-700" />
        <h1
          className={`font-bold text-slate-500 origin-left ${!open && 'scale-0'}`}
        >
          Appointment
        </h1>
      </div>

      {/* Search bar*/}
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
      {/* Add MenuItems*/}

      {MenuItems.map (item => (
        <div className='mt-2 '>
          {item.header
            ? <p className='text-sm'>{item.label}</p>
            : <ul
                key={item.key}
                className="flex gap-2 cursor-pointer py-1 hover:text-black border hover:border-l-slate-500 hover:border-l-2"
              >
                <span className="text-2xl text-slate-500 ">
                  {item.icon}
                </span>
                <p className=" text-slate-500">{item.label}</p>

              </ul>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
