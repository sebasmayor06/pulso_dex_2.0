import CardsFromatos from "./components/CardsFromatos";
import RedAside from "./components/RedAside";
import RedFranquicia from "./components/RedFranquicia";


export default function page() {
    return (
        <div>
            <RedFranquicia/>
            <RedAside/>
            <CardsFromatos/>
        </div>
    )
}
