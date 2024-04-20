"use client";
import SideNav from "./SideNav";
import { datosNav } from "../utils/nav";
import Link from "next/link";
import Image from "next/image";
import { Logo, Close } from "../utils/svg";
import styles from "./SideNav.module.css";
import { useState } from "react";

const CardSideNav = () => {
  const idsExcluidos = [1, 2];

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section>
      <div
        className="w-80  bg-white flex flex-col gap-10  transition-all duration-200 ease-out  "
        data-callapce={isOpen}
      >
        <div className="flex h-full flex-col px-4  w-full sidebar_name">
          <div className=" ">
            <div className="flex  justify-between  items-center">
              <Link
                className=" flex h-20  rounded-md   md:h-30 items-center  "
                href="/admin"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: Logo }}
                  className="sidebar_name"
                />
                <div className="w-32 text-black md:font-semibold md:text-3xl md:w-40 pl-1 sidebar_name">
                  Pulsodex
                </div>
              </Link>
              <button onClick={handleClose}>
                <div
                  className={`${styles.svgContainer} cursor-pointer  ${
                    isOpen ? "hidden" : "block p-10"
                  } `}
                  dangerouslySetInnerHTML={{ __html: Close }}
                />
              </button>
            </div>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col    md:space-x-0 md:space-y-2   ">
              <section className="pb-4">
                <h2 className=" text-dash-primary font-semibold pb-4 pl-4 ">
                  MENU
                </h2>
                <ul className="  ">
                  {datosNav
                    .filter((dato) => !idsExcluidos.includes(dato.id))
                    .map((dato, index) => (
                      <SideNav
                        name={dato.name}
                        href={dato.href}
                        img={dato.img}
                        key={index}
                        isOpen={isOpen}
                      />
                    ))}
                </ul>
              </section>
              <section className="pb-4">
                <h2 className="text-dash-primary font-semibold pb-4 pl-4 ">
                  PRODUCTOS
                </h2>
                <ul className="">
                  {datosNav
                    .filter((dato) => dato.id === 1)
                    .map((dato, index) => (
                      <SideNav
                        name={dato.name}
                        href={dato.href}
                        img={dato.img}
                        key={index}
                      />
                    ))}
                </ul>
              </section>
              <section>
                <h2 className="text-dash-primary font-semibold pb-4 pl-4 ">
                  ADMIN
                </h2>
                <ul className="">
                  {datosNav
                    .filter((dato) => dato.id === 2)
                    .map((dato, index) => (
                      <SideNav
                        name={dato.name}
                        href={dato.href}
                        img={dato.img}
                        key={index}
                      />
                    ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleClose} className="pt-9 pl-3">
        <div
          className={`${styles.svgContainer} cursor-pointer rotate-180 ${
            isOpen ? "block" : "hidden "
          } `}
          dangerouslySetInnerHTML={{ __html: Close }}
        />
      </button>
    </section>
  );
};

export default CardSideNav;
