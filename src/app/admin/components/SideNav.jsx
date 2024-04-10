import Link from 'next/link'
import Image from "next/image"


const SideNav = () => {
    return (
        <div className="flex h-full flex-col px-4  py-4   border-2 border-yellow-400">
            <div className=' border-2 border-green-600'>
                <Link
                    className=" flex h-20  rounded-md   md:h-30 items-center pb-10 "
                    href="/"
                >
                    <Image src="/franquicia/formatos/logo.png" alt="logo" width={30} height={30} />

                    <div className="w-32 text-black md:font-semibold md:text-3xl md:w-40">
                        Pulsodex
                    </div>
                </Link>

                <div className="flex items-center bg-[#48D64C] rounded-lg p-4  shadow-md shadow-black/50 mb-4" >
                    <Image width={30} height={30} src="/perfil.png" alt="logo" className="w-10 h-10 rounded-full" />
                    <div className='pl-4'>
                        <h1 className="text-sm font-normal text-[#fff]">Juan Carlos Villagram</h1>
                        <h2 className="text-sm text-[#fff]">123456789</h2>
                    </div>
                </div>
                <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                    <div className='shadow-sm shadow-black/50 p-2 rounded-lg mb-8 pl-8 flex items-center'>
                        <Image width={30} height={30} src="/dashboard/dashboard.png" alt="logo" className="w-7 h-7 " />

                        <h2 className='ml-4 font-semibold'>
                            Dashboard
                        </h2>
                    </div>
                    <ul className='pl-8'>
                        <li className='flex items-center pb-6'>
                            <Image src="/dashboard/finance.png" alt="logo" width={30} height={30} />
                            <h2 className='text-[#6D6D6D] pl-4'>
                                Mis Participaciones
                            </h2>
                        </li>
                        <li className='flex items-center pb-6'>
                            <Image src="/dashboard/finance.png" alt="logo" width={30} height={30} />
                            <h2 className='text-[#6D6D6D]'>
                                Movimientos
                            </h2>
                        </li>
                        <li className='flex items-center pb-6'>
                            <Image src="/dashboard/finance.png" alt="logo" width={30} height={30} />
                            <h2 className='text-[#6D6D6D]'>
                                Categorias
                            </h2>
                        </li>
                        <li className='flex items-center pb-6'>
                            <Image src="/dashboard/finance.png" alt="logo" width={30} height={30} />
                            <h2 className='text-[#6D6D6D]'>
                                Academia
                            </h2>
                        </li>
                    </ul>
                    <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                    <h1 className='text-black/90'>Otras herramientas </h1>
                    <ul>
                        <li className='text-[#6D6D6D]'>Calcular Utilidad</li>
                        <li className='text-[#6D6D6D]'>Soporte</li>
                    </ul>
                </div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SideNav