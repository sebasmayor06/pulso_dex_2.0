import Formatos from "./Formatos"

const CardsFromatos = () => {
    const datos = [
        {
            image: "/fanquicia/formato/logo.png",
            price: "$5.000.000",
            p1: "Diversidad de productos: ofrecemos la oportunidad de vender una amplia gama de productos.",
            p2: "Soporte y capacitación: ofrecemos capacitación y apoyo continuo en áreas como operaciones, marketing, ventas y gestión de inventario con IA.",
            p3: "No se necesita un espacio físico: No requieres espacio de almacenamiento para productos físicos y operación, lo que reduce costos.",
            p4: "Acceso al programa de afiliados Partners",
            button: "comprar"
        },
        {
            image: "/fanquicia/formato/logo.png",
            price: "$8.000.000",
            p1: "Diversidad de productos: ofrecemos la oportunidad de vender una amplia gama de productos.",
            p2: "Soporte y capacitación: ofrecemos capacitación y apoyo continuo en áreas como operaciones, marketing, ventas y gestión de inventario con IA.",
            p3: "No se necesita un espacio físico: No requieres espacio de almacenamiento para productos físicos y operación, lo que reduce costos.",
            p4: "Acceso al programa de afiliados Partners",
            button: "comprar"
        },
        {
            image: "/fanquicia/formato/logo.png",
            price: "$18.000.000",
            p1: "Diversidad de productos: ofrecemos la oportunidad de vender una amplia gama de productos.",
            p2: "Soporte y capacitación: ofrecemos capacitación y apoyo continuo en áreas como operaciones, marketing, ventas y gestión de inventario con IA.",
            p3: "No se necesita un espacio físico: No requieres espacio de almacenamiento para productos físicos y operación, lo que reduce costos.",
            p4: "Acceso al programa de afiliados Partners",
            button: "comprar"
        }
    ]
    return (
        <div>
            {
                datos.map((dato, index) => (
                    <Formatos
                        image={dato.image}
                        price={dato.price}
                        p1={dato.p1}
                        p2={dato.p2}
                        p3={dato.p3}
                        p4={dato.p4}
                        key={index}
                    />
                )

                )
            }
        </div>
    )
}

export default CardsFromatos