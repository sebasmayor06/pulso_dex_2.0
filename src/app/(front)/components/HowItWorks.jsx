import Image from "next/image";
import { useInView } from "react-intersection-observer";


export default function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.5, // Personaliza este valor según tus necesidades
    triggerOnce: true, // Para que la animación se dispare una sola vez
  });
  return (
    <div ref={ref} className="overflow-x-hidden shadow-xl bg-white md:p-8">
      <div className="inicio flex flex-col md:flex-row w-screen h-[950px] md:h-[650px] top-67px overflow-hidden left-0 bg-white">
      <div className='w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center relative'>
  <div className="relative">
    <Image
      src="/mujer.png"
      alt="logo"
      width={500}
      height={500}
      className='rounded-[10%] md:w-[450px] w-[360px] md:h-[600px] h-[450px]'
    />
  </div>
</div>
    <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col pl-4'>
      <div className='h-[40%] md:h-1/2'>
        <div className='md:w-[80%] flex justify-center items-center'>
          <p className='flex flex-col justify-center items-center md:pt-20 pt-8'>
            <span className='md:p-4 text-4xl md:text-6xl font-semibold'>¿Cómo funciona?</span>
            <span className=' text-texto text-base md:text-2xl'>Pulso Dex es un Ecommerce Omnicanal, otorgando una experiencia fluida en todos los puntos de contacto con el cliente.</span>
          </p>
        </div>
      </div>
      <div className="h-[60%] md:h-1/2">
        <div className=" flex flex-col gap-2 md:gap-5">
         <div className={`p-4 w-32 md:w-40 font-semibold md:text-xl text-sm text-white rounded-3xl bg-azulInicio ${inView?'animate-fade-down animate-duration-1000 animate-delay-[100ms] animate-normal':'hidden'}`}><h1 className="overflow-hidden">1. Regístrese</h1></div>
         <div className={`p-4 w-36 md:w-60 font-semibold md:text-xl text-sm text-white rounded-3xl bg-azulInicio ${inView?'animate-fade-down animate-duration-1000 animate-delay-[400ms] animate-normal':'hidden'}`}><h1 className="overflow-hidden">2. Verifíquese</h1></div>
         <div className={`p-4 w-52 md:w-72 font-semibold md:text-xl text-sm text-white rounded-3xl bg-azulInicio ${inView?'animate-fade-down animate-duration-1000 animate-delay-[700ms] animate-normal':'hidden'}`}><h1 className="overflow-hidden">3. Proyección en ventas</h1></div>
         <div className={`p-4 w-56 md:w-80 font-semibold md:text-xl text-sm text-white rounded-3xl bg-azulInicio ${inView?'animate-fade-down animate-duration-1000 animate-delay-[1000ms] animate-normal':'hidden'}`}><h1 className="overflow-hidden">4. Apertura del Dex de pulso</h1></div>
      </div>
        </div>
      </div>
    </div>
    </div>
  );
}
