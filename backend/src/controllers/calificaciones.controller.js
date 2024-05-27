import { pool } from "../databases/conexion.js";

export const createCalificacion = async (req, res) => {
  try {
    const { idUsuario, estrellas, opiniones, fk_usuario } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO calificaciones (id_usuario_cali, estrellas_cali, opiniones_cali, fk_usuario) VALUES (?, ?, ?, ?)",
      [idUsuario, estrellas, opiniones, fk_usuario]
    );
    if (rows.affectedRows > 0) {
      res.status(200).json({ message: "Calificación creada exitosamente." });
    } else {
      res.status(404).json({ message: "No se pudo crear la calificación." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" + error });
  }
};

export const getCalificaciones = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `
      SELECT c.*, u.nombre_user
      FROM calificaciones c
      JOIN usuarios u ON c.fk_usuario = u.pk_cedula_user
      WHERE c.fk_usuario = '${id}'
    `;
    const [response] = await pool.query(sql)
    if (response.length === 0) {
      res.status(200).json([]);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" + error });
  }
}

export const updateCalificacion = async (req, res) => {
  try {
    const { idUsuario, estrellas, fk_usuario } = req.body;
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" + error });
  }
};
