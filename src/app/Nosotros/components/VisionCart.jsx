import Vision from "./Vision"


const VisionCart = () => {

    const datos = [
        { title: "Optimización", description: "Queremos optimizar la cadena de suministro y la distribución.", image: "/nosotros/icons/optimizacion.png" },
        { title: "Cliente", description: "Calidad en productos, y experiencia para el cliente.", image: "/nosotros/icons/cliente.png" },
        { title: "Análisis", description: "Herramientas de seguimiento y comportamiento.", image: "/nosotros/icons/analisis.png" },
        { title: "Comunidad", description: "Fomentar la conexión con la comunidad.", image: "/nosotros/icons/comunidad.png" }
    ];

    return (

        <div className="flex flex-col justify-center gap-20  items-center bg-[#B9CEFF] w-full h-full md:px-2 md:py-10" >
            <h1 className="text-3xl text-center px-52  md:text-6xl md:font-medium text-[#292930] ">Los ejes fundamentales de
                nuestra visión.</h1>
            <div className="flex justify-center  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:max-w-[100rem] ">
                    {
                        datos.map(
                            (dato, index) => (
                                <Vision key={index} title={dato.title} description={dato.description} image={dato.image} />
                            )
                        )
                    }
                </div>

            </div>
            <div>
                <button
                    className="border-2 border-black  backdrop:blur bg-verdeButtom text-sm 
                    md:text-xl font-bold md:p-3 rounded-full hover:bg-gray-400 
                    hover:bg-opacity-50 w-44 h-16 md:w-64 md:h-20"
                >
                    Agendar Una Demo
                </button>
            </div>

        </div>
    )
}

export default VisionCart