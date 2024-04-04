import { pool } from "../database/conexion.js";

export const getVariedades = async (req, res) => {
  try {
    let sql = `SELECT * FROM variedad`;
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json({ message: "Variedades encontradas", data: result });
    } else {
      res.status(404).json({ message: "Error al buscar las variedades" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getVariedad = async (req, res) => {
  try {
    const id = req.params.id
    let sql = `SELECT * FROM variedad WHERE pk_id_vari = '${id}'`;
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json({ message: "Variedades encontradas", data: result });
    } else {
      res.status(404).json({ message: "Error al buscar las variedades" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createVariedad = async (req, res) => {
  try {
    const {tipo_vari, descripcion_vari, puntuacion_vari} = req.body
    let sql = `INSERT INTO variedad(tipo_vari, descripcion_vari, puntuacion_vari) VALUES ('${tipo_vari}', '${descripcion_vari}', '${puntuacion_vari}')`
    const [result] = await pool.query(sql)
    if(result.affectedRows > 0){
        res.status(200).json({message:"Variedades creada con exito", data:result})
    }else {
        res.status(404).json({message:"Error al buscar las variedades"})
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateVariedad = async (req, res) => {
  try {
    const id = req.params.id
    const {tipo_vari, descripcion_vari, puntuacion_vari, estado_vari} = req.body
    let sql = `UPDATE variedad SET tipo_vari = COALESCE('${tipo_vari}', tipo_vari), descripcion_vari=COALESCE('${descripcion_vari}', descripcion_vari), puntuacion_vari=COALESCE('${puntuacion_vari}', puntuacion_vari), estado_vari = COALESCE('${estado_vari}', estado_vari) WHERE pk_id_vari = '${id}'`
    const [result] = await pool.query(sql)
    if(result.affectedRows > 0){
        res.status(200).json({message:"Variedad actualizada con exito", data:result})
    }else {
        res.status(404).json({message:"Error al buscar las variedades"})
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteVariedad = async (req, res) => {
  try {
    const id = req.params.id
    let sql = `DELETE FROM variedad WHERE pk_id_vari = ${id}`
    const [result] = await pool.query(sql)
    if(result.length > 0){
        res.status(200).json({message:"Variedad eliminada con exito"})
    }else {
        res.status(404).json({message:"Error al eliminar la variedad"})
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
