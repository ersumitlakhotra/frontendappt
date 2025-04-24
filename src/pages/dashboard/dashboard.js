import React from 'react';


const HeaderItem = [
 getItem(1,"Total Revenue Over Time","$4500","Line Chart"),
 getItem(2,"7d Booking Sold","250","Bar Chart"),
 getItem(3,"Today Booking via User","54","Side Bar Chart"),
 getItem(4,"Today Booking via User","54","Side Bar Chart"),
];
function getItem ( key,label,price, chart) {
  return {
    key,
    price,
    chart,
    label,
  };
}

export const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="flex gap-6 lg:flex-row flex-col">
      {HeaderItem.map((item)=> (
        <div key={item.key} className="border rounded-lg bg-white shadow @md:w-1/4 w-full p-4">
          <p className="text-sm font-semibold text-slate-500">{item.label}</p>
          <h1 className='text-lg font-bold text-black'>{item.price}</h1>
          <div className='border h-20 mt-2 items-center flex justify-center'>{item.chart}</div>
        </div>
          ))}
      </div>
      

    </div>
  );
};

export default Dashboard;
