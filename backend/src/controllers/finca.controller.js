import {pool} from "../database/conexion.js"

export const getFinca = async(req, res) => {
    try {
        const id = req.params.id
        let sql = `SELECT * FROM finca WHERE pk_id_fin = '${id}'`
        const [result] = await pool.query(sql)
        if(result.length > 0){
            res.status(200).json({message:"Finca encontrada", data:result})
        } else{
            res.status(404).json({message:"La finca con el ID no existe"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}
export const getFincas = async(req, res) => {
    try {
        let sql = `SELECT * FROM finca`
        const [result] = await pool.query(sql)
        if(result.length > 0){
            res.status(200).json({message:"Las fincas encontradas con exito", data:result})
        }else{
            res.status(404).json({message:"No se encontraron fincas con el ID"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}
export const createFinca = async(req, res) => {
    try {
        const {nombre_fin, ubicacion_fin, imagen_fin, descripcion_fin, departamento_fin, municipio_fin, fk_id_usuario, estado_fin} = req.body
        let sql = `INSERT INTO finca(nombre_fin, ubicacion_fin, imagen_fin, descripcion_fin, departamento_fin, municipio_fin, fk_id_usuario, estado_fin) VALUES ('${nombre_fin}', '${ubicacion_fin}', '${imagen_fin}', '${descripcion_fin}', '${departamento_fin}', '${municipio_fin}', '${fk_id_usuario}', '${estado_fin}')`
        const [rows] = await pool.query(sql)
        if(rows.affectedRows > 0) {
            res.status(200).json({message:"Finca creada con exito"})
        } else {
            res.status(404).json({message:"No se pudo crear la finca"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}
export const updateFinca = async(req, res) => {
    try {
        const {nombre_fin, ubicacion_fin, imagen_fin, descripcion_fin, departamento_fin, municipio_fin, estado_fin} = req.body
        const id = req.params.id
        let sql = `UPDATE finca SET nombre_fin = COALESCE('${nombre_fin}', nombre_fin), ubicacion_fin = COALESCE('${ubicacion_fin}', ubicacion_fin), imagen_fin = COALESCE('${imagen_fin}', imagen_fin), descripcion_fin = COALESCE('${descripcion_fin}', descripcion_fin), departamento_fin = COALESCE('${departamento_fin}', departamento_fin), municipio_fin = COALESCE('${municipio_fin}', municipio_fin), estado_fin=COALESCE('${estado_fin}', estado_fin) WHERE pk_id_fin = '${id}'`
        const [rows] = await pool.query(sql)
        if(rows.affectedRows > 0){
            res.status(200).json({message:"Finca actualizada con exito"})
        }else{
            res.status(404).json({message:"No se pudo actualizar la finca con el ID"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}
export const deleteFinca = async(req, res) => {
    try {
        const id = req.params.id
        let sql = `DELETE FROM finca WHERE pk_id_fin = ${id}`
        const [rows] = await pool.query(sql)
        if(rows.affectedRows > 0){
            res.status(200).json({message:"Finca eliminada con exito"})
        }else {
            res.status(404).json({message:"Error con el ID al eliminar la finca"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}