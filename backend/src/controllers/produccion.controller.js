import {pool} from "../database/conexion.js"

export const getProduccion = async (req, res) => {
    try {
        const id = req.params.id
        let sql = `SELECT * FROM produccion WHERE pk_id_pro = '${id}'`
        const result = await pool.query(sql)
        if(result.length > 0){
            res.status(200).json({message:"Produccion encontrada con exito", data:result})
        }else {
            res.status(404).json({message:"Error al encontrar la produccion con el ID"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const getProducciones = async (req, res) => {
    try {
        let sql = `SELECT * FROM produccion`
        const result = await pool.query(sql)
        if(result.length > 0){
            res.status(200).json({message:"Postulaciones encontradas con exito", data:result})
        }else {
            res.status(404).json({message:"Error al encontrar las producciones con el ID"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const createProduccion = async (req, res) => {
    try {
        const {cantidad_pro, fk_id_variedad, fk_id_finca, estado_pro} = req.body
        let sql = `INSERT INTO produccion(cantidad_pro, fk_id_variedad, fk_id_finca, estado_pro) VALUES ('${cantidad_pro}', '${fk_id_variedad}', '${fk_id_finca}', '${estado_pro}')`
        const result = await pool.query(sql)
        if(result.affectedRows > 0){
            res.status(200).json({message:"Produccion creada con exito", data:result})
        }else {
            res.status(404).json({message:"Error al crear la produccion"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const updateProduccion = async (req, res) => {
    try {
        const id = req.params.id
        const {cantidad_pro, estado_pro} = req.body
        let sql = `UPDATE produccion SET cantidad_pro = COALESCE('${cantidad_pro}', cantidad_pro), estado_pro = COALESCE('${estado_pro}', estado_pro) WHERE pk_id_pro = ${id}`
        const result = await pool.query(sql)
        if(result.affectedRows > 0){
            res.status(200).json({message:"produccion actualizada con exito", data:result})
        }else {
            res.status(404).json({message:"Error al actualizar la subasta con el ID"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const deleteProduccion = async (req, res) => {
    try {
        const id = req.params.id
        let sql = `DELETE FROM produccion WHERE pk_id_pro = '${id}'`
        const result = await pool.query(sql)
        if(result.affectedRows > 0){
            res.status(200).json({message:"produccion eliminada con exito"})
        }else {
            res.status(404).json({message:"Error al eliminar la produccion con el ID"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}