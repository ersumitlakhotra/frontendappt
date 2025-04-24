import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {Avatar, Badge} from 'antd';
import {AiOutlineUser} from 'react-icons/ai';
import {FaRegBell} from 'react-icons/fa';

export const TopHeader = ({screen}) => {
  return (
    <div className="h-16 bg-white items-center p-4 shadow">
      <div className="flex items-center justify-between px-4">
        <div
          className={`border bg-gray-50 flex items-center gap-2 p-1 rounded-lg ${screen === 'lg' ? "w-96":"w-50" }  `}
        >
          <BiSearchAlt className="text-2xl text-slate-500" />
          <input
            type="text"
            className={`cursor-text bg-transparent focus:outline-none text-sm `}
            placeholder="search"
          />
        </div>
        {screen === "lg" }
        <div className="text-xl flex gap-6 cursor-pointer items-center">
          <Badge count={5}>
            <FaRegBell className='text-2xl'/>
          </Badge>
          <Avatar className="bg-slate-600" icon={<AiOutlineUser />} />
        </div>

      </div>
    </div>
  );
};

export default TopHeader;
