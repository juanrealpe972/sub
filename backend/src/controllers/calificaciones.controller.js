import { pool } from "../databases/conexion.js";

export const createCalificacion = async (req, res) => {
  try {
    const { idUsuario, estrellas, opiniones, fk_usuario } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO calificaciones (id_usuario_cali, estrellas_cali, opiniones_cali, fk_usuario) VALUES (?, ?, ?, ?)",
      [idUsuario, estrellas, opiniones, fk_usuario]
    );
    if (rows.length > 0) {
      res.status(200).json({ message: "Calificación creada exitosamente." });
    } else {
      res.status(404).json({ message: "No se encontraron municipios" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" + error });
  }
};

export const updateCalificacion = async (req, res) => {
  try {
    const { idUsuario, estrellas, fk_usuario } = req.body;
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" + error });
  }
};
