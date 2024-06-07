import { FcGoogle } from "react-icons/fc";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";
import { signIn } from "next-auth/react";
export const Social = () => {
  const onClick = (provider) => {

    console.log(provider, "providerrrrrrrrrr");
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex items-center justify-center  w-full pt-4">
      <button className="flex items-center  justify-center  gap-4  px-4 py-2 border-2 border-[#0b45545a] rounded-xl   w-full"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="text-2xl" />
        <p className=" text-[#00000086]">Iniciar sesión con Google</p>
      </button>
    </div>
  );
};
