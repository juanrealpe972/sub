import { pool } from "../database/conexion.js";

export const getVariedad = async (req, res) => {
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

export const createVariedad = async (req, res) => {
  try {
    let sql = `SELECT * FROM variedad`
    const [result] = await pool.query(sql)
    if(result.length > 0){
        res.status(200).json({message:"Variedades encontradas", data:result})
    }else {
        res.status(404).json({message:"Error al buscar las variedades"})
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateVariedad = async (req, res) => {
  try {
    let sql = `UPDATE variedad SET tipo_vari = COALESCE=()`
    const [result] = await pool.query(sql)
    if(result.length > 0){
        res.status(200).json({message:"Variedades encontradas", data:result})
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
