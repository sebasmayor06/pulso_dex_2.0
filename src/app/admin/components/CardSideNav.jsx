import SideNav from "./SideNav";
import { datosNav } from "../utils/nav";
import Link from "next/link";
import Image from "next/image";
import { dashboard, Logo, SignUp } from "../utils/svg";

const CardSideNav = () => {
  const idsExcluidos = [1, 2];

  return (
    <div className="flex flex-col gap-10  items-start   ">
      <div className="flex h-full flex-col px-4  py-4  w-full ">
        <div className=" ">
          <Link
            className=" flex h-20  rounded-md   md:h-30 items-center pb-10 "
            href="/"
          >
            <div dangerouslySetInnerHTML={{ __html: Logo }}  />

            <div className="w-32 text-black md:font-semibold md:text-3xl md:w-40 pl-1">
              Pulsodex
            </div>
          </Link>
          {/* <div className="flex items-center bg-[#48D64C] rounded-lg p-4  shadow-md shadow-black/50 mb-4" >
                        <Image width={35} height={35} src="/perfil.png" alt="logo" className="w-11 h-11 rounded-full" />
                        <div className='pl-4'>
                            <h1 className=" font-normal text-[#fff]">Juan Carlos Villagram</h1>
                            <h2 className=" text-[#fff]">ID 123456789</h2>
                        </div>
                    </div> */}
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2   ">
            <section className="pb-4">
              <h2 className=" text-dash-primary font-semibold pb-4 pl-4 ">MENU</h2>
              <ul className="  ">
                {datosNav
                  .filter((dato) => !idsExcluidos.includes(dato.id))
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
              <h2 className="text-dash-primary font-semibold pb-4 pl-4 ">ADMIN</h2>
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

      {/* <form className="px-4 hover:cursor-pointer py-2">
        <div dangerouslySetInnerHTML={{ __html: SignUp }} />
      </form> */}
    </div>
  );
};

export default CardSideNav;
