import Image from "next/image";

const Vision = ({ description, title, image }) => {
    return (
        <div className="flex flex-col justify-between items-center border-2 bg-[#424245] rounded-[50px]  p-8">

            <div className="mb-4 bg-[#292930] rounded-[100%] w-20 h-20 flex items-center justify-center">
                <Image
                    src={image}
                    alt="Imagen de la característica"
                    width={50}
                    height={50}
                />
            </div>
            <h2 className="text-xl text-white font-medium mb-2">{title}</h2>
            <p className="text-[#D0D0D0] text-center  md:text-xl  mb-8">{description}</p>
           
            <div className="border-b border-2 border-gray-400 w-16 rounded"></div>

        </div>
    );
}

export default Vision