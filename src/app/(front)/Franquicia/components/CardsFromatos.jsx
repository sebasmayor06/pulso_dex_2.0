import Formatos from "./Formatos"

const CardsFromatos = () => {
    const datos = [
        {
            image: "/franquicia/formatos/logo.png",
            price: "$5.000.000",
            modo: "Lite",
            vulemen: "125.000 cm3",
            peso: "5 - 10 KG",
            p1: "Diversidad de productos: ofrecemos la oportunidad de vender una amplia gama de productos.",
            p2: "Soporte y capacitación: ofrecemos capacitación y apoyo continuo en áreas como operaciones, marketing, ventas y gestión de inventario con IA.",
            p3: "No se necesita un espacio físico: No requieres espacio de almacenamiento para productos físicos y operación, lo que reduce costos.",
            p4: "Acceso al programa de afiliados Partners",
            button: "comprar",
            id: 1
        },
        {
            image: "/franquicia/formatos/logo.png",
            price: "$8.000.000",
            modo: "Star",
            vulemen: "512.000 cm3",
            peso: "8 - 12 KG",
            p1: "Diversidad de productos: ofrecemos la oportunidad de vender una amplia gama de productos.",
            p2: "Soporte y capacitación: ofrecemos capacitación y apoyo continuo en áreas como operaciones, marketing, ventas y gestión de inventario con IA.",
            p3: "No se necesita un espacio físico: No requieres espacio de almacenamiento para productos físicos y operación, lo que reduce costos.",
            p4: "Acceso al programa de afiliados Partners",
            button: "comprar",
            id: 2
        },
        {
            image: "/franquicia/formatos/logo.png",
            price: "$18.000.000",
            modo:"Primiun",
            vulemen: "4,096 m3",
            peso: "12 - 30 KG",
            p1: "Diversidad de productos: ofrecemos la oportunidad de vender una amplia gama de productos.",
            p2: "Soporte y capacitación: ofrecemos capacitación y apoyo continuo en áreas como operaciones, marketing, ventas y gestión de inventario con IA.",
            p3: "No se necesita un espacio físico: No requieres espacio de almacenamiento para productos físicos y operación, lo que reduce costos.",
            p4: "Acceso al programa de afiliados Partners",
            button: "comprar",
            id: 3
        }
    ]


    return (
        <div className="my-24 flex flex-col items-center justify-center">
            <div className="flex justify-start w-full md:max-w-[100rem]">

            <h2 className="title-secundary  mb-8 mx-2 text-center md:text-start ">
                Nuestros formatos de 
                <p>e-commerce</p>
            </h2>
            </div>
            <div className="flex justify-center items-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-2 mx-3  md:max-w-[100rem]">
                    {
                        datos.map((dato, index) => (
                            <div className=" ">

                                <Formatos
                                    image={dato.image}
                                    price={dato.price}
                                    volumen={dato.vulemen}
                                    peso={dato.peso}
                                    p1={dato.p1}
                                    p2={dato.p2}
                                    p3={dato.p3}
                                    p4={dato.p4}
                                    modo={dato.modo}
                                    key={index}
                                    id={dato.id}
                                />
                            </div>
                        )

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CardsFromatos