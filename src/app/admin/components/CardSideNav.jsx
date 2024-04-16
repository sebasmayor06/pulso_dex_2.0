import SideNav from "./SideNav"
import { datosNav } from "../utils/nav"
import Link from 'next/link'
import Image from "next/image"
import { dashboard, Logo, SignUp } from "../utils/svg"

const CardSideNav = () => {
    return (
        <div className="flex flex-col gap-10  items-start">
            <div className="flex h-full flex-col px-4  py-4  ">
                <div className=' '>
                    <Link
                        className=" flex h-20  rounded-md   md:h-30 items-center pb-10 "
                        href="/"
                    >
                        <div dangerouslySetInnerHTML={{ __html: Logo }} />

                        <div className="w-32 text-black md:font-semibold md:text-3xl md:w-40">
                            Pulsodex
                        </div>
                    </Link>
                    <div className="flex items-center bg-[#48D64C] rounded-lg p-4  shadow-md shadow-black/50 mb-4" >
                        <Image width={35} height={35} src="/perfil.png" alt="logo" className="w-11 h-11 rounded-full" />
                        <div className='pl-4'>
                            <h1 className=" font-normal text-[#fff]">Juan Carlos Villagram</h1>
                            <h2 className=" text-[#fff]">ID 123456789</h2>
                        </div>
                    </div>
                    <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                        <div className='shadow-sm shadow-black/50 p-2 rounded-lg mb-8 pl-8 '>
                            <Link
                                href="/admin/dashboard"
                                className="flex items-center"
                            >
                                <div dangerouslySetInnerHTML={{ __html: dashboard }} />
                                <h2 className='ml-4 font-semibold'>
                                    Dashboard
                                </h2>
                            </Link>
                        </div>
                        {
                            datosNav.filter(dato => dato.id !== true)
                                .map((dato, index) => (
                                    <SideNav
                                        name={dato.name}
                                        href={dato.href}
                                        img={dato.img}
                                        key={index}
                                    />
                                ))

                        }
                        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                        <h1 className='text-black/90 font-semibold'>Otras herramientas </h1>
                        <ul className="pt-4">
                            {
                                datosNav.filter(dato => dato.id === true)
                                    .map((dato, index) => (
                                        <SideNav
                                            name={dato.name}
                                            href={dato.href}
                                            img={dato.img}
                                            key={index}
                                        />
                                    )
                                    )
                            }
                        </ul>
                    </div>

                </div>
            </div>

            <form className="px-4 hover:cursor-pointer py-2">
                <div dangerouslySetInnerHTML={{ __html: SignUp }} />

            </form>
        </div>

    )
}

export default CardSideNav