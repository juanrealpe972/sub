import { pool } from "../database/conexion.js";

export const getSubs = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM subasta"
    );
    if (result.length > 0) {
      res.status(204).json({ message: "Subasta encontrada", data: result });
    } else {
      res.status(404).json({ message: "No existen subastas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" + error });
  }
};

export const getSub = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM subasta WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      res.status(404).json({ message: "No existe la subasta con tal ID" });
    } else {
      res
        .status(204)
        .json({ message: "Subasta con ID asignado", data: result[0] });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" + error });
  }
};

export const createSub = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO subasta(title, description) VALUES (?, ?)",
      [title, description]
    );
    res.status(204).json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" + error });
  }
}

export const updateSub = async (req, res) => {
  try {
    const result = await pool.query("UPDATE subasta SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" + error });
  }
}

export const deleteSub = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM subasta WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: "No existe la subasta con tal ID" });
    }
    res.status(204).json({message:"Subasta eliminada con exito"});
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" + error });
  }
}
