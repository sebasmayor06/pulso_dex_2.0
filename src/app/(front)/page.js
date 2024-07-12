"use client";
import { Fragment, useState, useEffect } from "react";
// import Empecemos from "./components/Empecemos";
// import FAQ from "./components/FAQ";
import HowItWorks from "./components/HowItWorks";
import Inicio from "./components/Inicio";
import Retail from "./components/Retail";
import Form from "./components/Form2";
import Beneficios2 from "./components/Beneficios2";
// import IA from "./components/IA";
import NoPierdas from "./components/NoPierdas";
export default function Home() {
  

  const [showModal, setShowModal] = useState(false);


  return (
    <Fragment>
      <Inicio setShowModal2={() => setShowModal(true)}></Inicio>
      <Retail setShowModal2={() => setShowModal(true)}></Retail>
      {/* <Empecemos setShowModal2={()=>setShowModal(true)}/> */}
      <HowItWorks setShowModal2={() => setShowModal(true)} />
      <Beneficios2 />
      {/* <IA setShowModal2={()=>setShowModal(true)}/> */}
      <NoPierdas setShowModal2={() => setShowModal(true)} />
      {/* <FAQ /> */}
      <Form isVisible={showModal} onClose={() => setShowModal(false)}></Form>
    </Fragment>
  );
}
