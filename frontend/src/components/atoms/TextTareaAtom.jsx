import React from "react";

function TextTareaAtom({ icon: Icon, id, name, value, onChange, children }) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grisMedio3" />
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full border rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        rows="4"
      >{children} </textarea>
    </div>
  );
}

export default TextTareaAtom;
