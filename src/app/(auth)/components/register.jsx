"use client";
import { Gmail, Password, Username } from "../utils/svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../../validations/usersSchema";
import { useRouter } from "next/navigation";
import Link from "next/link";

const pageRegister = ({closeModal}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.name,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      // router.push("/admin");
      
      router.push("/login");
      closeModal()
    }

    console.log(res, "respuesta");
  });
  return (
    <div className={`$ flex justify-center  items-center w-full h-full py-4`}>
      <form
        action=""
        onSubmit={onSubmit}
        className="max-w-md border  border-[#ffffff8e] my-2 bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-[#232859] pb-8 text-3xl font-bold">Resgístrate</h1>
        <div className="mb-6 ">
          <div className="flex items-center mb-1">
            {/* <label htmlFor="name">Nombre</label> */}
            <div
              className="absolute pl-2"
              dangerouslySetInnerHTML={{ __html: Username }}
            />
            <input
              type="text"
              id="name"
              className="inputForm focus:outline-none focus:shadow-outline "
              placeholder="Nombre Completo"
              {...register("name")}
            />
          </div>
          {errors.name?.message && (
            <p className="text-xs text-red-500 text-wrap w-[16.8rem]">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="mb-6 ">
          <div className=" flex items-center mb-1">
            {/* <label htmlFor="email">Email</label> */}
            <div
              className="absolute pl-2"
              dangerouslySetInnerHTML={{ __html: Gmail }}
            />
            <input
              type="text"
              id="email"
              className="inputForm focus:outline-none focus:shadow-outline"
              placeholder="Correo electronico"
              {...register("email")}
            />
          </div>
          {errors.email?.message && (
            <p className="text-xs text-red-500 w-[16.8rem]">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="mb-6 ">
          <div className=" flex items-center mb-1">
            {/* <label htmlFor="password">Contraseña</label> */}
            <div
              className="absolute pl-2"
              dangerouslySetInnerHTML={{ __html: Password }}
            />
            <input
              type="password"
              id="password"
              className="inputForm focus:outline-none focus:shadow-outline"
              placeholder="Contraseña"
              {...register("password")}
            />
          </div>
          {errors.password?.message && (
            <p className="text-xs text-red-500 w-[16.8rem]">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="mb-6 ">
          <div className="flex items-center mb-1">
            {/* <label htmlFor="confirmPassword">Contraseña</label> */}
            <div
              className="absolute pl-2"
              dangerouslySetInnerHTML={{ __html: Password }}
            />
            <input
              type="password"
              id="confirmPassword"
              className="inputForm focus:outline-none focus:shadow-outline"
              placeholder="Confirmar contraseña"
              {...register("confirmPassword")}
            />
          </div>
          {errors.confirmPassword?.message && (
            <p className="text-xs text-red-500 w-[16.8rem]">
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>
        <div className="flex items-center mb-1 justify-between">
          <button
            type="submit"
            className="bg-[#48D64C] hover:bg-[#2d8830] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
          >
            Enviar
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center">
          {/* <button onClick={() => router.push("/login")}> */}
          <p className="text-[#00000082]">
            ¿No tienes una cuenta?{" "}
            <Link href="/login" className="text-[#6749D6]">
              Iniciar sesión
            </Link>{" "}
          </p>{" "}
          {/* </button> */}
        </div>
      </form>
    </div>
  );
};

export default pageRegister;
