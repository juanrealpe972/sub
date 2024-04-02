import React from "react";

function AbrirModalTemplate({ children }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-negro bg-opacity-30 backdrop-blur-sm">
      <div className="absolute bg-blanco rounded-xl p-2">
        <div className="flex h-full">{children}</div>
      </div>
    </div>
  );
}

export default AbrirModalTemplate;
