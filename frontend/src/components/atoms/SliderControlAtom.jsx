import React from "react";
import { icono } from "./IconsAtom";

function SliderControlAtom({ onClick, direction }) {
  const icon = direction === "prev" ? "->" : "<-";

  const positionStyle = direction === "prev" ? "left-2" : "right-2";

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 bg-negro bg-opacity-50 text-xl rounded-full w-10 h-10 flex justify-center items-center ${positionStyle}`}
    >
      {icon}
    </button>
  );
}

export default SliderControlAtom;
