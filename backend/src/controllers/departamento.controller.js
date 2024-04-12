import { pool } from "../database/conexion.js";

export const getDepartamentos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM departamento");
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No hay departamentos registrados" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const getDepartamentoById = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query(
      `SELECT * FROM departamento WHERE pk_codigo_depar = '${id}'`
    );
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(404).json({ message: "Departamento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const createDepartamento = async (req, res) => {
  const { pk_codigo_depar, nombre_depart } = req.body;
  try {
    const [result] = await pool.query(
      `INSERT INTO departamento (pk_codigo_depar, nombre_depart, estado_depar) VALUES ('${pk_codigo_depar}' ,'${nombre_depart}', 'activo')`
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Departamento creado exitosamente" });
    } else {
      res.status(404).json({ message: "Error al crear el departamento" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const updateDepartamento = async (req, res) => {
  const id = req.params.id;
  const { pk_codigo_depar, nombre_depart } = req.body;
  try {
    const [result] = await pool.query(
      `UPDATE departamento SET pk_codigo_depar = '${pk_codigo_depar}', nombre_depart = '${nombre_depart}' WHERE pk_codigo_depar = '${id}'`
    );
    if (result.affectedRows > 0) {
      res
        .status(200)
        .json({ message: "Departamento actualizado exitosamente" });
    } else {
      res.status(404).json({ message: "Departamento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const deleteDepartamento = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query(
      `DELETE FROM departamento WHERE pk_codigo_depar = '${id}'`,
      [id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Departamento eliminado exitosamente" });
    } else {
      res.status(404).json({ message: "Departamento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const activarDepartamento = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query(
      `UPDATE departamento SET estado_depar = 1 WHERE pk_codigo_depar = ${id}`
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Departamento activado exitosamente" });
    } else {
      res.status(404).json({ message: "Departamento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const desactivarDepartamento = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query(
      `UPDATE departamento SET estado_depar = 2 WHERE pk_codigo_depar = ${id}`
    );
    if (result.affectedRows > 0) {
      res
        .status(200)
        .json({ message: "Departamento desactivado exitosamente" });
    } else {
      res.status(404).json({ message: "Departamento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};