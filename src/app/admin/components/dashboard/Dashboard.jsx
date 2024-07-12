import { auth, signOut } from "../../../../auth";
import { IoIosNotificationsOutline } from "react-icons/io";

async function Dashboard() {
  const session = await auth();

  return (
    <div className="flex justify-between items-center w-full h-full">
      <h1 className={` mb-4 text-lg md:text-2xl flex flex-col md:block`}>
        Bienvenido, <span>{session?.user?.name.split(" ")[0]}!</span>
      </h1>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <div className="flex justify-center items-center gap-4">
          <IoIosNotificationsOutline className="text-3xl" />
          <button type="submit">Sign out</button>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
