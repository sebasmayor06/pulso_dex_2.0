import Desarrollo from "./components/Desarrollo";
import Landing from "./components/Landing";
import Mision from "./components/Mision";
import VisionCart from "./components/VisionCart";

export default function page() {
  return (
    <div>
      {/* landing */}
      <div className=" bg-black ">
        <Landing />
      </div>
      <div className="" >
        <Mision/>
      </div>
      <div >
        <VisionCart/>
      </div>
      <div>
        <Desarrollo/>
      </div>
    </div>
  )
}
