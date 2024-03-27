function ProfileUser() {
  return (
    <>
      <div className="">
        <img src="./src/assets/finca1.jpg" className="" alt="" />
      </div>
      <div className="flex">
        <img
          src="./src/assets/profile_user.jfif"
          className="rounded-full"
          alt=""
        />
        <div className="grid grid-cols-1">
          <span>Juan Camilo</span>
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
