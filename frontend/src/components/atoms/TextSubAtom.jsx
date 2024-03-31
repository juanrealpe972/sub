import React from "react";
import { Link } from "react-router-dom";

function TextSubAtom({ to, color, text }) {
  return (
    <Link to={to} className={`font-roboto-black text-${color} text-2xl`}>
      {text}
    </Link>
  );
}

export default TextSubAtom;
