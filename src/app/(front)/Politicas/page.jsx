import Primero from "./components/Primero";
import Segundo from "./components/Segundo";
import Tercero from "./components/Tercero";
import PoliticasPage from "./components/landing";

function policasPages() {
  return (
    <div>
      <PoliticasPage />
      <Primero />
      <Segundo />
      {/* <Tercero /> */}
    </div>
  );
}

export default policasPages;
