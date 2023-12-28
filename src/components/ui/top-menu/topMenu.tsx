"use client";
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store/ui/ui-store";
import Link from "next/link";
import React from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
const TopMenu = () => {
  // const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  const openMenu = useUIStore((state) => state.openSideMenu);
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/men"}
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/women"}
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 mx-2"
          href={"/category/kids"}
        >
          Niños
        </Link>
      </div>
      <div className="flex items-center">
        {/* search cart y menu */}
        <Link href={"/search"}>
          <IoSearchOutline className="w-5 h-5 mx-2" />
        </Link>
        <Link href={"/cart"}>
          <div className="relative"></div>
          <span className="absolute text-xs rounded-full px-1 font-bold -top-1 right-10 bg-blue-700 text-white">
            3
          </span>
          <IoCartOutline className="w-5 h-5" />
        </Link>
        <button
          onClick={() => openMenu()}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default TopMenu;
