import Image from "next/image";

const Formatos = ({image,price,p1,p2,p3,p4}) => {
    return (
        <div>
            <h1>Nuestros formatos de e-commerce</h1>
            <div>
                <div>
                    <div>
                        <div>
                            <Image
                                src="/fanquicia/formato/logo.png"
                                alt="Imagen de desarrollo"
                                width={600}
                                height={600}
                                className=" rounded-[12%] w-[120rem]"
                            />
                            <span>$5.000.000</span>
                        </div>
                        <div>
                            <p>Diversidad de productos: ofrecemos la oportunidad de vender una amplia gama de productos.</p>
                            <p>
                            </p>
                            <p></p>
                            <p></p>
                        </div>

                    </div>
                    <button>comprar</button>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Formatos