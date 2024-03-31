import React from "react";
import { Link } from "react-router-dom";

function TextCoffeeAtom({ to }) {
  return (
    <Link to={to} className="font-roboto-black text- text-2xl">
      Coffee
    </Link>
  );
}

export default TextCoffeeAtom;
