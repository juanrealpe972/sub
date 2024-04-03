import { pool } from "../database/conexion.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const validarUser = async (req, res) => {
  try {
    const { correo, password } = req.body;

    const sql = `SELECT * FROM usuarios WHERE email_user = '${correo}'`;
    const [rows] = await pool.query(sql);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Usuario no registrado" });
    }

    const user = rows[0]; // Obtener el primer usuario de los resultados

    const validPassword = await bcrypt.compare(
      password,
      user.password_user
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ user }, process.env.AUT_SECRET, {
      expiresIn: process.env.AUT_EXPIRE,
    });

    res
      .status(200)
      .json({ message: "Usuario autorizado", data: user, token: token });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const verificarUserToken = async (req, res, next) => {
  try {
    const token_client = req.headers("token");
    // const token_client = req.cookies.token
    if (!token_client) {
      res.status(404).json({ message: "Token no valido" });
    } else {
      jwt.verify(token_client, process.env.AUT_SECRET, (err, decoded) => {
        if (err) {
          res.status(401).json({ message: "Token no valido" });
        } else {
          console.log(decoded);
          next();
        }
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
