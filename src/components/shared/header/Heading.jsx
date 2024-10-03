import React from "react";
import { NavLink } from "react-router-dom";
import IconHeart from "@/icons/IconHeart";
import IconNotification from "@/icons/IconNotification";
import IconAvatar from "@/icons/IconAvatar";
import IconDropdown from "@/icons/IconDropdown";
import Logo from "@/icons/Logo";
const Heading = () => {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="container flex justify-between items-center text-[#212F3F] border-b border-b-[#E9EAEC] h-[64px] lg:max-w-[1748px]">
        <Logo></Logo>
        <div className="flex justify-between items-center gap-10">
          <ItemMain url={"/"}>Trang chủ</ItemMain>
          <ItemMain url={"/company"}>Công ty</ItemMain>
          <ItemMain url={"/profile-cv"}>Hồ sơ & CV</ItemMain>
          <ItemMain url={"/tools"}>Công cụ hỗ trợ</ItemMain>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center ">
            <ItemNotification
              icon={<IconHeart></IconHeart>}
              children={"99"}
            ></ItemNotification>
            <ItemNotification
              icon={<IconNotification></IconNotification>}
              children={"99"}
              className={"mx-5"}
            ></ItemNotification>
            <div className="px-5 rounded-md hover:bg-secondary group">
              <button className="flex justify-between items-center gap-10">
                <IconAvatar />
                <IconDropdown className="transition-transform duration-500 group-hover:rotate-180" />
              </button>
            </div>
          </div>
          {/* <button className="px-5 py-2 rounded-2xl border border-[#E9EAEC]">
          Đăng ký
        </button>
        <button className="px-5 py-2 rounded-2xl border border-[#E9EAEC] bg-button text-white">
          Đăng nhập
        </button> */}
          <div className="flex items-center justify-center divide-x">
            <button className="text-gray-400 px-2 uppercase transition-all hover:text-primary">
              EN
            </button>
            <button className="font-bold px-2 uppercase transition-all hover:text-primary">
              VI
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const ItemMain = ({ url, children }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? "font-semibold text-primary"
          : "font-semibold text-text5 hover:text-primary"
      }
    >
      {children}
    </NavLink>
  );
};

const ItemNotification = ({ icon, url, children, className }) => {
  return (
    <li
      className={`relative list-none w-12 h-12 rounded-full bg-secondary ${className}`}
    >
      <a
        href={url}
        className="w-full h-full flex justify-center items-center rounded-full"
      >
        {icon}
      </a>
      <div className="absolute flex justify-center items-center w-5 h-5 bg-primary rounded-full top-0 -right-1">
        <span className="text-sm text-white">{children}</span>
      </div>
    </li>
  );
};

export default Heading;
