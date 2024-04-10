import Image from "next/image"

const RedFranquicia = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center  md:text-6xl md:font-medium text-[#292930] mt-24 mx-2 mb-8 md:max-w-7xl ">¡Únete a nuestra red de franquicias y convierte tu sueño
                empresarial en realidad!</h1>
            <div>

                <Image
                    src="/franquicia/perfil.png"
                    alt="Imagen de desarrollo"
                    width={600}
                    height={600}
                    className=" rounded-[50px] w-[60rem]"
                />
            </div>
            <div className="mt-24 max-w-[46.69rem] mx-auto">
                <h2 className="text-center text-4xl font-medium text-[#292930] mb-8">¿Por qué una franquicia es la mejor opción?</h2>
                <p className="text-[#555555] text-md mb-4 leading-relaxed">
                    Nuestro objetivo es brindar transparencia y claridad sobre los aspectos importantes que tenemos en cuenta al iniciar en nuestro modelo de negocio. Pulso Dex se encarga de guiarte en todo momento para la implementación correcta de nuestro E-commerce con IA.
                </p>
                <ul className="mb-8 text-[#555555] font-semibold list-disc pl-6">
                    <li className="mb-4">Finanzas</li>
                    <li className="mb-4">Planificación a largo plazo (2 años)</li>
                    <li className="mb-4">Networking y colaboración</li>
                    <li className="mb-4">Capacitación y soporte</li>
                    <li className="mb-4">Cumplimiento legal y regulatorio</li>
                </ul>
                <p className="mb-6 text-[#555555] text-md">
                    Según el más reciente estudio de Colfranquicias en el año 2022, el 90% de ellas aumentó sus ventas, cifra que fue un 7% superior a 2021.
                </p>
                <p className="mb-6 text-[#555555] text-md">
                    La estabilidad económica que ha experimentado Colombia en los últimos años ha contribuido al éxito de las franquicias. Los inversionistas nacionales e internacionales tienen más confianza en invertir en franquicias cuando el entorno económico es estable.
                </p>
                <p className="mb-8 text-[#555555] text-md">
                    Pulso Dex tiene como base la siguiente estructura de franquicias:
                </p>
                <ul className="list-decimal text-[#555555] pl-6 text-md">
                    <li className="mb-4"> <span className="font-semibold">Franquicia de comercio:</span> Esta clasificación se refiere a la venta de los productos físicos que tenemos en el catálogo que importamos.</li>
                    <li> <span className="font-semibold">Franquicia de servicios:</span> Esta clasificación se refiere al servicio tecnológico que estamos ofreciendo.</li>
                </ul>
            </div>
        </div>
    )
}

export default RedFranquicia