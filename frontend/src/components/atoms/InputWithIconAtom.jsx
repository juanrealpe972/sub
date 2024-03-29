import React from "react";

const InputWithIconAtom = ({
  icon: Icon,
  id,
  name,
  placeholder,
  required,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grisMedio3" />
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        className="pl-10 pr-4 py-2 w-full rounded-md border border-grisClaro shadow-sm focus:border-verdeSena2 focus:ring-0"
      />
    </div>
  );
};

export default InputWithIconAtom;