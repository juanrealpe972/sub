import React from "react";

const SelectInputAtom = ({ children, onChange, value, name, optionOne, icon: Icon }) => {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grisMedio3" />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="pl-8 pr-4 py-2 w-full text-sm border-2 rounded-xl border-gray-200 hover:border-gray-400 shadow-sm p-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
      >
        <option value="" hidden label={`${optionOne}`} />
        {children}
      </select>
    </div>
  );
}

export default SelectInputAtom;
