import {pool} from "../database/conexion.js"
import jwt from "jsonwebtoken";

export const validarUser = async (req, res) => {
  try {
    let { correo, password } = req.body;
    let sql = `SELECT * FROM usuarios WHERE email_user = '${correo}' and password_user ='${password}'`;
    const [rows] = await pool.query(sql);
    if (rows.length > 0) {
      const token = jwt.sign({ rows }, process.env.AUT_SECRET, {
        expiresIn: process.env.AUT_EXPIRE,
      });
      res.status(200).json({ message: "Usuario autorizado", data: rows, token: token });
      // res.cookie("token", token, {httpOnly: true})
    } else {
      res.status(404).json({ message: "Usuario no autorizado" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const verificarUserToken = async (req, res, next) => {
  try {
    const token_client = req.headers("token")
    // const token_client = req.cookies.token
    if(!token_client) {
      res.status(404).json({message:"Token no valido"})
    } 
    else{
      jwt.verify(token_client, process.env.AUT_SECRET, (err, decoded) => {
        if(err){
          res.status(401).json({message:"Token no valido"})
        }else {
          console.log(decoded);
          next()
        }
      })
  }
  } catch (error) {
    res.status(500).json({message:error})
  }
}