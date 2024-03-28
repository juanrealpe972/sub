import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import MessageOfLife from "./MessageOfLife";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const Menus = [
    {
      title: "Como Crear Subasta",
      link: "/ayudacrearsubasta",
      icon: AiOutlineUser,
    },
    { title: "Como Pujar", link: "/ayudacomopujar", icon: FiMessageSquare },
    {
      title: "Subastas",
      link: "/subcoffee",
      icon: TbReportAnalytics,
      gap: true,
    },
    { title: "Crear una subasta", link: "/subform", icon: FiFolder },
    { title: "Cart", link: "/lobgin", icon: FiShoppingCart },
    { title: "Ayuda", link: "/lognin", icon: AiOutlineHeart, gap: true },
    { title: "Configuración", link: "/login", icon: RiSettings4Line },
  ];

  return (
    <>
      <div className="flex min-h-screen">
        <div
          className={`${
            open ? "w-64" : "w-20"
          } bg-green-600 max-h-full p-5 pt-5 relative duration-300`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/isotipo-SubCoffee.png"
              className={`cursor-pointer w-10 h-10 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Subcoffee
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <Link
                to={Menu?.link}
                key={index}
                onClick={() => setActiveLink(Menu.link)}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-green-500 text-gray-300 text-sm items-center gap-x-4 ${
                  Menu.gap ? "mt-9" : "mt-2"
                } ${activeLink === Menu.link ? "bg-green-500" : ""}`}
              >
                <div>{React.createElement(Menu?.icon, { size: "20" })}</div>
                <span
                  className={`${!open && "hidden"}
                         origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            <MessageOfLife />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
