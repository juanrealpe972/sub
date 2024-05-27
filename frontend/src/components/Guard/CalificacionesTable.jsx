import { Button, Textarea } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useCalificacionesContext } from "../../context/CalificacionesContext";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function CalificacionesTable({ titleBtn, fk_user }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comentario, setComentario] = useState("");
  const [mode, setMode] = useState("create");
  const { createCalificacion, getCalificacionesUser, calificaciones } = useCalificacionesContext();
  const user = JSON.parse(localStorage.getItem('user'));
  const stars = Array(5).fill(0);

  useEffect(() => {
    getCalificacionesUser(fk_user)
      .catch((error) => {
        console.error("Error fetching calificaciones:", error);
        // Handle error appropriately
      });
  }, [fk_user, getCalificacionesUser]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = async () => {
    if (currentValue === 0 || comentario.trim() === "") {
      alert("Por favor selecciona una calificación y escribe un comentario.");
      return;
    }

    const data = {
      idUsuario: user.pk_cedula_user,
      estrellas: currentValue,
      opiniones: comentario,
      fk_usuario: fk_user
    };

    try {
      await createCalificacion(data);
      setCurrentValue(0);
      setComentario("");
      getCalificacionesUser(fk_user); 
    } catch (error) {
      alert("Error en el servidor: " + error.message);
    }
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        size={24}
        color={index < count ? colors.orange : colors.grey}
        className="mr-1"
      />
    ));
  };

  const userHasRated = calificaciones?.some(calificacion => calificacion.idUsuario === user.pk_cedula_user);

  return (
    <div className="flex flex-col items-center px-4 pb-4">
      {!userHasRated && (
        <div className="flex flex-col items-center">
          <div className="flex mb-4">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                className="mr-2 cursor-pointer"
              />
            ))}
          <p className="text-lg font-semibold text-gray-700">
            {currentValue > 0 ? `${currentValue}` : ""}
          </p>
          </div>
          <Textarea
            label="Opinión"
            variant="bordered"
            placeholder="Escribe tu opinión"
            className="max-w-xs mb-4"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <Button onClick={handleSubmit}>{titleBtn}</Button>
        </div>
      )}
      <div className="mt-4 w-full">
        {calificaciones && calificaciones.length > 0 ? (
          calificaciones.map((calificacion) => (
            <div key={calificacion.pk_id_cali} className="border-b-2 border-gray-200 py-2">
              <p>{calificacion.nombre_user}</p>
              <div className="flex items-center text-sm">
                {renderStars(calificacion.estrellas_cali)}
              </div>
              <p>{calificacion.opiniones_cali}</p>
              <p>{new Date(calificacion.fecha_cali).toLocaleDateString()}</p>
              {calificacion.idUsuario === user.pk_cedula_user && (
                <Button onClick={() => setMode(calificacion.pk_id_cali)}>Editar</Button>
              )}
            </div>
          ))
        ) : (
          <p>No hay calificaciones disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default CalificacionesTable;
