import React from "react";
import { Link } from "react-router-dom";

const AvatarAtom = ({ img }) => {
  return (
    <Link to="/">
      <img
        src={`./src/assets/${img}`}
        alt="Logo Subcoffee"
        className="h-8 w-auto mr-2 rounded-full"
      />
    </Link>
  );
};

export default AvatarAtom;
