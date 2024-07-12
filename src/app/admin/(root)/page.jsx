import Dashboard from "../components/dashboard/Dashboard";
import Ventas from "../components/datos/Ventas";

export default async function Page() {
  return (
    <main className="  pl-2 pr-4 pt-4  md:p-8 w-full flex items-center justify-center flex-col">
      <Dashboard />
      <Ventas />
    </main>
  );
}
