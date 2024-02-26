import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ toggleSidebar }) => {
  const isMobileView = useSelector((store) => store?.user?.isMobileView);
  return (
    <div
      className={`grid grid-flow-col fixed w-full z-20 bg-white opacity-100 ${isMobileView ? "py-4 px-4" : "px-6 py-2"} border-b-2`}>
      <div className="flex col-span-1 items-center">
        {!isMobileView && (
          <img
            className="h-10 cursor-pointerY"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt="menu"
            onClick={toggleSidebar}
          />
        )}
        <img
          className={`h-6  ${isMobileView ? "h-4 ml-0" : "ml-2"}`}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/YouTube_logo_%282017%29.png/640px-YouTube_logo_%282017%29.png"
          alt="youtube"
        />
      </div>
      {!isMobileView ? (
        <div className="col-span-10 flex justify-center items-center">
          <input
            className="w-1/2 border border-zinc-800 rounded-l-xl h-12 border-r-none px-2 border-r-0 hover:border-zinc-800"
            placeholder="Search"
          ></input>
          <div className="h-12 border border-zinc-800 flex items-center rounded-r-xl w-16 justify-center border-l-none">
            <img
              className="h-6"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Osny1a8IqZW6Cfuyji3MAzr-J-97bDyfaUEqopiApjcrU_tgFjTO7SYiWfyRuSsy1vk&usqp=CAU"
              alt="find"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-end">
          <img
            className="h-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Osny1a8IqZW6Cfuyji3MAzr-J-97bDyfaUEqopiApjcrU_tgFjTO7SYiWfyRuSsy1vk&usqp=CAU"
            alt="find"
          />
        </div>
      )}
      {!isMobileView && (
        <div className="col-span-2 flex justify-end">
          <img
            className="h-12"
            src="https://www.pngitem.com/pimgs/m/514-5149286_profile-logo-hd-png-download.png"
            alt="profile"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
