import { Cookies } from "./components/Cookies";
import { Derechos } from "./components/Derechos";
import Integredad from "./components/Integredad";
import Politica from "./components/Politica";
import Privacidad from "./components/Privacidad";
import Modificaciones from "./components/Modificaciones";
import Supervision from "./components/Supervision";
import Tratamiento from "./components/Tratamiento";
import Transferencia from "./components/Transferencia";
import PoliticasPage from "./components/landing";

function policasPages() {
  return (
    <div>
      <PoliticasPage />
      <Politica />
      <Modificaciones />
      <Tratamiento />
      <Cookies />
      <Derechos />
      <Privacidad />
      <Transferencia />
      <Integredad />
      <Supervision />
    </div>
  );
}

export default policasPages;
