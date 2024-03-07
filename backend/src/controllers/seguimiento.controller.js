import { pool } from "../database/conexion.js";

export const getSeguimiento = async (req, res) => {
  try {
    const id = req.params.id;
    let sql = `SELECT * FROM seguimiento WHERE pk_id_seg = '${id}'`;
    const result = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json({ message: "El seguimiento es: ", data: result });
    } else {
      res.status(404).json({ message: "Error al listar el seguimiento con el ID" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSeguimientos = async (req, res) => {
  try {
    let sql = `SELECT * FROM seguimiento`
    const result = await pool.query(sql)
    if(result.length > 0){
        res.status(201).json({message:'Lista de Seguimientos',data:result})
    }else {
        res.status(404).json({message:"Error al listar los segumientos"});
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createSeguimiento = async (req, res) => {
  try {
    const {nombre_seg, fk_id_produccion, fk_id_usuario, estado_seg} = req.body
    let sql = `INSERT INTO seguimiento(nombre_seg, fk_id_produccion, fk_id_usuario, estado_seg) VALUES ('${nombre_seg}','${fk_id_produccion}','${fk_id_usuario}', '${estado_seg}')`
    const result = await pool.query(sql)
    if(result.length > 0){
        res.status(200).json({message:"Seguimiento creado con exito", data:result})
    }else {
        res.status(404).json({message:"Error al crear el seguimiento"})
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateSeguimiento = async (req, res) => {
  try {
    const id = req.params.id
    const {nombre_seg, estado_seg} = req.body
    let sql = `UPDATE seguimiento SET nombre_seg = COALESCE('${nombre_seg}', nombre_seg), estado_seg = COALESCE('${estado_seg}', estado_seg) WHERE pk_id_seg =${id}`
    const result = await pool.query(sql)
    if(result.length > 0){
      res.status(200).json({message:`Se actualizó el reguimiento con exito`, data:result[0] })
    } else{
      res.status(404).json({message:`No se encontró el registro a actualizar`})
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteSeguimiento = async (req, res) => {
  try {
    const id = req.params.id
    let sql = `DELETE FROM seguimiento WHERE pk_id_seg ='${id}'`
    const result = await pool.query(sql)
    if(result.length > 0){
      res.status(200).json({message:'Registro eliminado correctamente'})
    } else{
      res.status(404).json({message:'No se encontró el registro a eliminar'})
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
