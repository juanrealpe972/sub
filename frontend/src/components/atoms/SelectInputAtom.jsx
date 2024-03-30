import React from "react";

const SelectInputAtom = ({ id, value, onChange, children }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="mt-1 w-full border rounded-md border-grisClaro shadow-sm p-2 text-gridMedio1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    >
      {children}
    </select>
  );
};

export default SelectInputAtom;