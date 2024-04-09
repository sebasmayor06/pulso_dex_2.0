"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link'
import Form from "./Form2";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [showModal, setShowModal] = useState(false)
  // navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toogleNavbar = () => {
    setIsClick(!isClick);
  };

  // navbar

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const pathname = usePathname()
  return (
    <>
   
      <nav
        className={`${visible ?"":"hidden "} `}
      >
        <div className={` fixed w-full z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 backdrop-blur-md border-b`}>
          <div className="flex items-center justify-between  h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image src="/Group9.png" alt="logo" width={150} height={150} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className={`
                  ${pathname === "/" ? "text-white border border-white rounded-lg p-2 font-bold bg-black" : "text-black rounded-lg p-2 font-bold"}
                  transition duration-500 ease-in-out  hover:text-white
                `}
                >
                  Inicio
                </Link>
                <Link
                  href="/Soluciones"
                  className={`
                  ${pathname === "/Soluciones" ? "text-white border border-white rounded-lg p-2 font-bold bg-black" : "text-black rounded-lg p-2 font-bold"}
                  transition duration-500 ease-in-out  hover:text-white
                `}
                >
                  Soluciones
                </Link>
                <Link
                  href="/Ayuda"
                  className={`
                  ${pathname === "/Ayuda" ? "text-white border border-white rounded-lg p-2 font-bold bg-black" : "text-black rounded-lg p-2 font-bold"}
                  transition duration-500 ease-in-out  hover:text-white
                `}
                >
                  Ayuda
                </Link>
                <Link
                  href="/Nosotros"
                  className={`
                  ${pathname === "/Nosotros" ? "text-white border border-white rounded-lg p-2 font-bold bg-black" : "text-black rounded-lg p-2 font-bold"}
                  transition duration-500 ease-in-out  hover:text-white
                `}
                >
                  Nosotros
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <span
                className="text-black rounded-lg p-2"
              >
                Comienza gratis
              </span>
              <button onClick={() => setShowModal(true)} className="bg-black rounded-lg text-white p-2 hover:bg-verdeButtom hover:text-black font-bold">
                Agenda Demo
              </button>
            </div>
            <div className="md:hidden flex items-center ">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black
                            hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                onClick={toogleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-black block  hover:text-white rounded-lg p-2"
              >
                Inicio
              </Link>
              <Link
                href="/Soluciones"
                className="text-black block  hover:text-white rounded-lg p-2"
              >
                Soluciones
              </Link>
              <Link
                href="/Ayuda"
                className="text-black block  hover:text-white rounded-lg p-2"
              >
                Ayuda
              </Link>
              <Link
                href="/Nosotros"
                className="text-black block  hover:text-white rounded-lg p-2"
              >
                Nosotros
              </Link>
              <span
                className="text-black rounded-lg p-2"
              >
                Comienza gratis
              </span>
              <button onClick={() => setShowModal(true)} className="bg-black rounded-lg text-white p-2 hover:bg-verdeButtom hover:text-black">
                Agendar Demo
              </button>
            </div>
          </div>
        )}
      </nav>
      <Form isVisible={showModal} onClose={() => setShowModal(false)}></Form>
    </>
  );
}
