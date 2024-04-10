"use client"

import { Fragment, useState } from "react";
import Desarrollo from "./components/Desarrollo";
import Landing from "./components/Landing";
import Mision from "./components/Mision";
import VisionCart from "./components/VisionCart";

import Form from "../components/Form2";

export default function pageNosotros() {

  const [showModal, setShowModal] = useState(false)


  return (
    <div>
      {/* landing */}
      <div className="  ">
        <Landing />
      </div>
      <div className="" >
        <Mision setShowModal2={()=> setShowModal(true)}/>
      </div>
      <div >
        <VisionCart setShowModal2={()=> setShowModal(true)} />
      </div>
      <div>
        <Desarrollo setShowModal2={()=> setShowModal(true)} />
      </div>
      <Form isVisible={showModal} onClose={() => setShowModal(false)}></Form>

    </div>
  )
}
