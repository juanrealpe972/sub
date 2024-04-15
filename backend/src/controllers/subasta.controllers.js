import { pool } from "../database/conexion.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/subastas");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
export const cargarImagen = upload.single("img", "imgcert");

export const getSubastas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM subasta");
    if (result.length > 0) {
      res.status(200).json({ message: "Subastas encontradas", data: result });
    } else {
      res.status(404).json({ message: "No existen subastas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el sistema", error: error.message });
  }
};

export const getSubasta = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query(
      `SELECT * FROM subasta WHERE pk_id_sub = '${id}'`
    );
    if (result.length === 0) {
      res.status(404).json({ message: "No existe la subasta con ese ID" });
    } else {
      res.status(200).json({ message: "Subasta encontrada", data: result });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el sistema", error: error.message });
  }
};

export const createSubasta = async (req, res) => {
  try {
    const { fecha_ini, fecha_fin, precio_ini, unit_peso, catidad_sub, description_sub, fk_variedad } = req.body;
    let img = req.file.originalname;
    let imgCertificado = req.file.originalname;

    const [result] = await pool.query(
      `INSERT INTO subasta(fecha_inicio_sub, fecha_fin_sub, imagen_sub, precio_inicial_sub, unidad_peso_sub, cantidad_sub, estado_sub, certificado_sub, descripcion_sub, fk_variedad) VALUES ('${fecha_ini}','${fecha_fin}', '${img}', '${precio_ini}','${unit_peso}','${catidad_sub}','abierta','${imgCertificado}','${description_sub}','${fk_variedad}')`
    );
    if (result.length > 0) {
      res.status(201).json({ message: "Subasta creada exitosamente" });
    } else {
      res.status(404).json({ message: "Error al crear la subasta" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el sistema", error: error.message });
  }
};

export const updateSubasta = async (req, res) => {
  try {
    const id = req.params.id;
    let img = req.file.originalname;
    let imgCertificado = req.file.originalname;

    const { fecha_ini, fecha_fin, precio_ini, unit_peso, catidad_sub, description_sub, fk_variedad } = req.body;
    const [result] = await pool.query(
      ` UPDATE subasta SET fecha_inicio_sub = '${fecha_ini}', fecha_fin_sub = '${fecha_fin}', imagen_sub = '${img}', precio_inicial_sub = '${precio_ini}', unidad_peso_sub = '${unit_peso}', cantidad_sub = '${catidad_sub}', estado_sub = 'abierta', certificado_sub = '${imgCertificado}', descripcion_sub = '${description_sub}', fk_variedad = '${fk_variedad}' WHERE pk_id_sub = '${id}' `
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Subasta actualizada exitosamente" });
    } else {
      res.status(404).json({ message: "No se encontró la subasta con ese ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el sistema", error: error.message });
  }
};

export const deleteSubasta = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query(`DELETE FROM subasta WHERE id = '${id}'`);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Subasta eliminada exitosamente" });
    } else {
      res.status(404).json({ message: "No se encontró la subasta con ese ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el sistema", error: error.message });
  }
};

export const activarSubasta = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query(`UPDATE subasta SET estado = 1 WHERE id = '${id}'`
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Subasta activada exitosamente" });
    } else {
      res.status(404).json({ message: `No se encontró ninguna subasta con el ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el sistema", error: error.message });
  }
};

export const desactivarSubasta = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query(`UPDATE subasta SET estado = 2 WHERE id = '${id}'`);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Subasta desactivada exitosamente" });
    } else {
      res.status(404).json({ message: `No se encontró ninguna subasta con el ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el sistema", error: error.message });
  }
};
