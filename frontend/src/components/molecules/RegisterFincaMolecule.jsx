import React, { useEffect, useState } from "react";
import { Button, ModalFooter } from "@nextui-org/react";
import { useFincaContext } from "../../context/FincaContext";
import { useDepartContext } from "../../context/DeparContext";
import { icono } from "../atoms/IconsAtom";
import { useMunicipioContext } from "../../context/MunicipioContext";
import { useVeredaContext } from "../../context/VeredaContext";
import { SearchSelect, TextInput, SearchSelectItem } from "@tremor/react";

const RegisterFincaMolecule = ({ mode, titleBtn }) => {
  const [formData, setFormData] = useState({
    nombre_fin: "",
    departamento: "",
    municipio: "",
    vereda: "",
    imagen_fin: ""
  });

  const { idFinca, createFincas, updateFincas, errors } = useFincaContext();
  const { departamentos, getDepartamentos } = useDepartContext();
  const { getMunisForDeparActivos, municipiosActivos, setMunicipiosActivos } = useMunicipioContext();
  const { getVeresForMuni, veredasForMuni, setVeredasForMuni } = useVeredaContext();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getDepartamentos();
  }, []);

  useEffect(() => {
    if (mode === "update" && idFinca) {
      setFormData({
        nombre_fin: idFinca.nombre_fin,
        imagen_fin: idFinca.imagen_fin,
        departamento: idFinca.fk_departamento,
        municipio: idFinca.fk_municipio,
        vereda: idFinca.fk_vereda
      });
      getMunisForDeparActivos(idFinca.fk_departamento);
      getVeresForMuni(idFinca.fk_municipio);
    } else {
      setMunicipiosActivos([]);
      setVeredasForMuni([]);
    }
  }, [mode, idFinca]);

  const handleDepartamentoChange = (departamento) => {
    setFormData((prevData) => ({
      ...prevData,
      departamento,
      municipio: "",
      vereda: "",
    }));
    getMunisForDeparActivos(departamento);
  };

  const handleMunicipioChange = (municipio) => {
    setFormData((prevData) => ({
      ...prevData,
      municipio,
      vereda: "",
    }));
    getVeresForMuni(municipio);
  };

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("nombre_fin", formData.nombre_fin);
      data.append("imagen_fin", formData.imagen_fin);
      data.append("fk_vereda", formData.vereda);
      if (mode === "update") {
        updateFincas(idFinca.pk_id_fin, data, user.pk_cedula_user);
      } else {
        data.append("fk_id_usuario", user.pk_cedula_user);
        createFincas(data, user.pk_cedula_user);
      }
    } catch (error) {
      console.error("Error del sistema:", error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 px-4">
      {
        errors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
            {error}
          </div>
        ))
      }
      <div className="flex w-full justify-center rounded-xl">
        <input
          placeholder="Imagen de usuario"
          type="file"
          name="imagen_fin"
          className="hidden"
          id="fileInput"
          onChange={handleChange}
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer items-center w-48 flex justify-center bg-blue-100 rounded-xl border"
        >
          {formData.imagen_fin ? (
            <div className="relative">
              {mode === "update" ? (
                <img
                  src={
                    typeof formData.imagen_fin === "string"
                      ? `http://localhost:4000/fincas/${formData.imagen_fin}`
                      : URL.createObjectURL(formData.imagen_fin)
                  }
                  alt="finca"
                  className="h-28 w-48 object-cover rounded-xl mx-auto"
                />
              ) : (
                formData.imagen_fin instanceof File && (
                  <img
                    src={URL.createObjectURL(formData.imagen_fin)}
                    alt="finca"
                    className="h-28 w-48 object-cover rounded-xl mx-auto"
                  />
                )
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center w-48 h-28 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-300">
              <span className="text-gray-500 text-center">
                Seleccionar imagen
              </span>
            </div>
          )}
        </label>
      </div>
      <TextInput
        label=""
        aria-label="Nombre de la Finca"
        icon={icono.iconoNamePropiedad}
        placeholder="Nombre de la Finca"
        variant="bordered"
        required
        type="text"
        name="nombre_fin"
        value={formData.nombre_fin}
        onChange={handleChange}
      />
      <SearchSelect
        name="departamento"
        placeholder="Seleccionar departamento"
        value={formData.departamento}
        className="cursor-pointer"
        icon={icono.iconoDepar}
        onChange={handleDepartamentoChange}
        required
      >
        {departamentos.map(({ pk_codigo_depar, nombre_depar }) => (
          <SearchSelectItem key={pk_codigo_depar} className="cursor-pointer" value={pk_codigo_depar}>
            {nombre_depar}
          </SearchSelectItem>
        ))}
      </SearchSelect>
      <SearchSelect
        name="municipio"
        placeholder="Seleccionar municipio"
        value={formData.municipio}
        className="cursor-pointer"
        icon={icono.iconoMuni}
        onChange={handleMunicipioChange}
        required
      >
        {municipiosActivos.map(({ pk_codigo_muni, nombre_muni }) => (
          <SearchSelectItem key={pk_codigo_muni} className="cursor-pointer" value={pk_codigo_muni}>
            {nombre_muni}
          </SearchSelectItem>
        ))}
      </SearchSelect>
      <SearchSelect
        name="vereda"
        placeholder="Seleccionar vereda"
        value={formData.vereda}
        className="cursor-pointer"
        icon={icono.iconoMuni}
        onChange={(value) => setFormData((prevData) => ({ ...prevData, vereda: value }))}
        required
      >
        {veredasForMuni.map(({ pk_id_vere, nombre_vere }) => (
          <SearchSelectItem key={pk_id_vere} className="cursor-pointer" value={pk_id_vere}>
            {nombre_vere}
          </SearchSelectItem>
        ))}
      </SearchSelect>
      <ModalFooter className="flex justify-center">
        <Button
          type="submit"
          className="text-white bg-[#39A800] h-10 w-36 rounded-lg font-bold flex justify-center items-center"
        >
          {titleBtn}
        </Button>
      </ModalFooter>
    </form>
  );
};

export default RegisterFincaMolecule;
