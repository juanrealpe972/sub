import React from "react";
import { Link } from "react-router-dom";

function TextSubAtom({ to, color, text, className }) {
  return (
    <Link to={to} className={` text-${color} text-2xl ${className} duration-200`}>
      {text}
    </Link>
  );
}

export default TextSubAtom;
