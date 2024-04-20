import Image from "next/image";

const Mision = ({ setShowModal2 }) => {
    return (
        <div className="flex justify-center items-center md:h-screen w-full h-full md:mb-0 mb-8 z-50 ">
            <div className=" flex items-center justify-center flex-col-reverse   md:flex-row  md:gap-20 gap-4  xs:gap-10  md:max-w-5xl ">
                <div className="flex justify-center items-center border-2 border-black rounded-[12%] overflow-hidden w-[13rem]  xs:w-[20rem] md:w-[120rem] ">
                    <Image
                        src="/nosotros/image.png"
                        alt="Imagen de la misión"
                        width={600}
                        height={600}
                        className="p-2 bg-[#B9CEFF]"
                    />
                </div>
                <div className="px-8 pt-8">
                    <h1 className="title-secundary xs:mb-4 mb-2">Nuestra Misión</h1>
                    <p className=" text-color-black  md:text-xl xs:text-lg text-[0.8rem]  xs:mb-8 mb-4">En Pulso Dex, nos dedicamos a simplificar y potenciar la experiencia de compra en línea. Nuestro enfoque está en proporcionar una plataforma intuitiva y eficiente que automatice las ventas y la distribución de productos con IA, brindando comodidad y confianza en cada transacción.</p>
                    <button
                        className="bg-azulInicio border-2 hover:border-[#000000] border-color-btn  rounded-md xs:text-sm font-semibold text-color-btn p-2  w-36  xs:w-40 h-12  md:w-64 md:h-20 text-[0.8rem]  md:text-xl rounded-l-full rounded-r-full transition-all duration-300 ease-out hover:bg-[#778ec4bd] hover:text-black "
                        onClick={() => setShowModal2()}

                    >
                        Agendar una Demo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mision;
