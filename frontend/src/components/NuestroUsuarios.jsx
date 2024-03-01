function NuestroUsuarios() {
  const nueuser = [
    { img: "./src/assets/nueuser_1.jfif" },
    { img: "./src/assets/nueuser_2.jfif" },
    { img: "./src/assets/nueuser_3.jfif" },
    { img: "./src/assets/nueuser_4.jfif" },
    { img: "./src/assets/nueuser_5.jfif" },
    { img: "./src/assets/nueuser_6.jfif" },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-2 py-4 ml-5 place-items-center">
      {nueuser.map((nueuser, i) => {
        return (
          <div key={i} className="w-64 h-52">
            <img src={nueuser.img} className=" rounded-xl" />
          </div>
        );
      })}
    </div>
  );
}

export default NuestroUsuarios;
