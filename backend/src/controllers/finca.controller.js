import multer from "multer";
import { pool } from "../database/conexion.js";

const storage = multer.diskStorage({
  destination: function (req, img, cb) {
    cb(null, "public/img");
  },
  filename: function (req, img, cb) {
    cb(null, img.originalname);
  },
});
const uploat = multer({ storage: storage });
export const cargarImagen = uploat.single("img");

export const getFinca = async (req, res) => {
  try {
    const id = req.params.id;
    let sql = `SELECT * FROM finca WHERE pk_id_fin = '${id}'`;
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json({ message: "Finca encontrada", data: result });
    } else {
      res.status(404).json({ message: "La finca con el ID no existe" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getFincas = async (req, res) => {
  try {
    let sql = `SELECT * FROM finca`;
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json({ message: "Las fincas encontradas con exito", data: result });
    } else {
      res.status(404).json({ message: "No se encontraron fincas con el ID" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createFinca = async (req, res) => {
  try {
    const { nombre_fin, longitud_fin, latitud_fin, descripcion_fin, estado_fin, fk_id_usuario, fk_municipio } = req.body;

    let imagen_fin = req.file.originalname;

    let sql = `INSERT INTO finca(nombre_fin, longitud_fin, latitud_fin, imagen_fin, descripcion_fin, estado_fin, fk_id_usuario, fk_municipio) VALUES ('${nombre_fin}', '${longitud_fin}', '${latitud_fin}', '${imagen_fin}', '${descripcion_fin}', '${estado_fin}', '${fk_id_usuario}', '${fk_municipio}')`;
    const [rows] = await pool.query(sql);
    if (rows.affectedRows > 0) {
      res.status(200).json({ message: "Finca creada con exito" });
    } else {
      res.status(404).json({ message: "No se pudo crear la finca" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateFinca = async (req, res) => {
  try {
    const { nombre_fin, ubicacion_fin, descripcion_fin, departamento_fin, municipio_fin, estado_fin } = req.body;
    let imagen_fin = req.filename;

    const id = req.params.id;
    let sql = `UPDATE finca SET nombre_fin = COALESCE('${nombre_fin}', nombre_fin), ubicacion_fin = COALESCE('${ubicacion_fin}', ubicacion_fin), imagen_fin = COALESCE('${imagen_fin}', imagen_fin), descripcion_fin = COALESCE('${descripcion_fin}', descripcion_fin), departamento_fin = COALESCE('${departamento_fin}', departamento_fin), municipio_fin = COALESCE('${municipio_fin}', municipio_fin), estado_fin=COALESCE('${estado_fin}', estado_fin) WHERE pk_id_fin = '${id}'`;
    const [rows] = await pool.query(sql);
    if (rows.affectedRows > 0) {
      res.status(200).json({ message: "Finca actualizada con exito" });
    } else {
      res.status(404).json({ message: "No se pudo actualizar la finca con el ID" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteFinca = async (req, res) => {
  try {
    const id = req.params.id;
    let sql = `DELETE FROM finca WHERE pk_id_fin = ${id}`;
    const [rows] = await pool.query(sql);
    if (rows.affectedRows > 0) {
      res.status(200).json({ message: "Finca eliminada con exito" });
    } else {
      res.status(404).json({ message: "Error con el ID al eliminar la finca" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
