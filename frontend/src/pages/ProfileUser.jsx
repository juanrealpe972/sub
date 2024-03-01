function ProfileUser() {
  return (
    <>
      <div className="flex">
        <img src="./src/assets/react.svg" alt="" />
        <div className="grid grid-cols-1">
          <h3>Juan</h3>
          <span>finca</span>
          <span>3157874593</span>
          <span>15-06-2005</span>
          <button>Editar perfil</button>
        </div>
      </div>
      <div className="flex space-x-28 justify-center">
        <button>Subastas creadas</button>
        <button>Subastas ganadas</button>
      </div>
    </>
  );
}

export default ProfileUser;
