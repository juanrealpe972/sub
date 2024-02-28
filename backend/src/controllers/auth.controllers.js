import { pool } from "../database/conexion.js";

export const getUsers = async (req, res) => {
  let sql = `SELECT * FROM usuarios`;
  try {
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json({ message: "Los usuarios son: ", data: result });
    } else {
      res
        .status(404)
        .json({ message: "No hay usuarios registrados por el momento" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor " + error });
  }
};
