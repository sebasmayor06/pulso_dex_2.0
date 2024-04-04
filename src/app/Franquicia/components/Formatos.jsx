import Image from "next/image";

const Formatos = ({ image, price, p1, p2, p3, p4, id, modo }) => {
    return (
        <div className={`${id === 1 ? "bg-[#B9CEFF] rounded-lg" : "" || id === 2 ? "bg-[#A4F8F8] rounded-lg" : "" || id === 3 ? "bg-[#35FF9E] rounded-lg" : ""} `}>
            <div className="py-8 ">
                <div className=" mx-2  px-4 p-8 bg-white rounded-lg">

                    <div className="flex items-center pb-8">
                        <Image
                            src={image}
                            alt="Imagen de desarrollo"
                            width={30}
                            height={30}
                            className=" "
                        />
                        <h2 className="text-[#292930] md:text-md pl-1  font-semibold">{modo}</h2>
                        <span className="text-[#292930] md:text-md pl-12 font-semibold">{price} <span className="text-[#292930] md:text-md font-normal"> + IVA</span></span>
                    </div>
                    <div>
                        <p className="text-[#02030996] mb-4 ">
                            <span className="font-semibold md:text-md">{p1.split(":")[0]}:</span>
                            {p1.split(":")[1]}
                        </p>
                        <p className="text-[#02030996] mb-4 ">
                            <span className="font-semibold md:text-md">{p2.split(":")[0]}:</span>
                            {p2.split(":")[1]}
                        </p>
                        <p className="text-[#02030996] mb-4 ">
                            <span className="font-semibold md:text-md">{p3.split(":")[0]}:</span>
                            {p3.split(":")[1]}
                        </p>
                        <p className="text-[#02030996]   font-semibold ">
                            {p4}
                        </p>
                    </div>
                </div>

            </div>
            <div className="px-2 pb-8">
                <button className="w-full py-4 md:text-md text-[#292930] font-semibold  rounded-[50px]  border-2  bg-white">comprar</button>
            </div>
        </div>
    )
}

export default Formatos