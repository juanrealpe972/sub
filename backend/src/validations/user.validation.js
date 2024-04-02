import { check } from "express-validator";

export const validationUpdateUser = [];
export const validationRegisterUser = [
  check("pk_cedula_user", "La cedula es obligatorio, max 11 caracteres")
    .not()
    .toInt()
    .isNumeric({ no_symbols: true })
    .isLength({ max: 11 }),
  check("nombre_user", "El nombre es obligatorio, max 50 caracteres")
    .not()
    .isEmpty()
    .isLength({ max: 50 }),
  check("email_user", "El email es obligatorio, max 50 caracteres")
    .isEmail()
    .isLength({ max: 50 }),
  check("password_user", "La contraseña es obligatoria, max 50 caracteres")
    .not()
    .isEmpty()
    .isLength({ max: 50 }),
  check("telefono_user", "El Telefono es obligatorio, max 10 caracteres")
    .not()
    .toInt()
    .isNumeric()
    .isLength({ max: 50 }),
  check("fecha_nacimiento_user", "La fecha de nacimiento es obligatoria")
    .not()
    .exists()
    .isISO8601(),
  check("rol_user", "El rol es obligatorio")
    .not()
    .isEmpty()
    .custom((values) => {
      const rol_user = ["vendedor", "comprador", "admin"];
      if (!rol_user.includes(values)) {
        throw new Error("Error, ingrese el error permitido");
      }
      return true;
    }),
];
