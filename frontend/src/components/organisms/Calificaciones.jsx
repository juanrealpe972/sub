import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Calificaciones({ titleBtn }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex flex-col items-center px-4 pb-4">
      <div className="flex mb-4">
        {stars.map((_, index) => (
          <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={
              (hoverValue || currentValue) > index ? colors.orange : colors.grey
            }
            className="mr-2 cursor-pointer"
          />
        ))}
      </div>
      <p className="mb-4 text-lg font-semibold text-gray-700">
        {currentValue > 0
          ? `${currentValue} estrella${currentValue > 1 ? 's' : ''}`
          : "Selecciona una calificación"}
      </p>
      <Button>{titleBtn}</Button>
    </div>
  );
}

export default Calificaciones;
