import { validationResult } from "express-validator";
import { pool } from "../database/conexion.js";

export const getUsers = async (req, res) => {
  try {
    let sql = `SELECT * FROM usuarios`;
    const [rows] = await pool.query(sql);
    if (rows.length > 0) {
      res.status(200).json({ message: "Los usuarios son: ", data: rows });
    } else {
      res.status(404).json({ message: "No hay usuarios registrados por el momento" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor " + error });
  }
};

export const createUser = async (req, res) => {
  try {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
      res.status(404).json(errors)
    }

    const {cedula_user, nombre_user, email_user, password_user, descripcion_user, telefono_user, fechanacimiento_user, rol_user}= req.body
    let sql = `INSERT INTO usuarios (pk_cedula_user, nombre_user, email_user, password_user, descripcion_user, telefono_user, fecha_nacimiento_user, rol_user) VALUES ('${cedula_user}', '${nombre_user}','${email_user}','${password_user}','${descripcion_user}','${telefono_user}', '${fechanacimiento_user}' ,'${rol_user}')`
    const [result] = await pool.query(sql)
    if(result.affectedRows> 0){
      res.status(200).json({status:200, message:"Usuario creado exitosamente"})
    }else {
      res.status(404).json({message:"No se pudo crear el usuario"})
    }
  } catch (error){
    res.status(500).json({message:error}) 
  }
}

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    const {nombre_user, email_user, password_user, descripcion_user, imagen_user, telefono_user, fechanacimiento_user, rol_user, estado_user} = req.body
    let sql = `UPDATE usuarios SET  nombre_user = COALESCE('${nombre_user}', nombre_user), email_user = COALESCE('${email_user}', email_user), password_user = COALESCE('${password_user}', password_user), descripcion_user = COALESCE('${descripcion_user}', descripcion_user), imagen_user = COALESCE('${imagen_user}', imagen_user),  telefono_user = COALESCE('${telefono_user}', telefono_user), fecha_nacimiento_user = COALESCE('${fechanacimiento_user}', fecha_nacimiento_user), rol_user = COALESCE('${rol_user}', rol_user), estado_user = COALESCE('${estado_user}', estado_user) WHERE pk_cedula_user = '${id}'`
    const [result] = await pool.query(sql)
    if(result.affectedRows > 0){
      res.status(200).json({message:"Usuario actualizado con exito"})
    }else {
      res.status(404).json({message:"No se pudo actualizar el usuario"})
    }
  } catch (error) {
    res.status(500).json({message: error})
  }
}

export const getUser = async (req, res) => {
  try {
    const id = req.params.id
    let sql = `SELECT * FROM usuarios WHERE pk_cedula_user = '${id}'`
    const [result] = await pool.query(sql)
    if(result.length>0){
      res.status(200).json({message:"Usuario encontrado con exito", data:result})
    }else {
      res.status(404).json({message:"Error al encontrar el usuario"})
    }
  } catch (error) {
    res.status(500).json({message:error})
  }
} 

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    let sql = `DELETE FROM usuarios WHERE pk_cedula_user = '${id}'`
    const [result] = await pool.query(sql)
    if(result.affectedRows > 0){
      res.status(200).json({message:"Usuario eliminado con exito"})
    }else {
      res.status(404).json({message:"Error con el ID al eliminar el usuario"})
    }
  } catch (error) {
    res.status(500).json({message:error})
  }
}
