import Image from "next/image";

const Mision = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className=" flex flex-col   md:flex-row  gap-20 md:max-w-5xl ">
                <div className="border-2 border-black rounded-[12%] overflow-hidden w-full md:w-[120rem] ">
                    <Image
                        src="/nosotros/image.png"
                        alt="Imagen de la misión"
                        width={600}
                        height={600}
                        className="p-2 bg-[#B9CEFF]"
                    />
                </div>
                <div>
                    <h1 className="text-3xl  md:text-6xl md:font-medium text-[#292930] mb-4">Nuestra Misión</h1>
                    <p className="text-gris  md:text-xl  mb-8">En Pulso Dex, nos dedicamos a simplificar y potenciar la experiencia de compra en línea. Nuestro enfoque está en proporcionar una plataforma intuitiva y eficiente que automatice las ventas y la distribución de productos con IA, brindando comodidad y confianza en cada transacción.</p>
                    <button
                        className="bg-azulInicio border-2 border-[#292930] rounded-md font-semibold text-black p-2 hover:bg-white hover:text-black w-32 h-12 md:w-64 md:h-20 text-xs md:text-xl rounded-l-full rounded-r-full"
                    >
                        Agendar Demo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mision;
