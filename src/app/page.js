"use client"
import { Fragment, useState } from "react";
import Empecemos from "./components/Empecemos";
// import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Retail from "./components/Retail";
import Form from "./components/Form2";
import Beneficios from "./components/Beneficios";
import IA from "./components/IA";
import NoPierdas from "./components/NoPierdas";

export default function Home() {

  const [showModal, setShowModal] = useState(false)
console.log(showModal);


  return (
    <Fragment>

    <Navbar setShowModal2={()=>setShowModal(true)}></Navbar>
    <Inicio setShowModal2={()=>setShowModal(true)}></Inicio>
    <Retail setShowModal2={()=>setShowModal(true)}></Retail>
    <Empecemos setShowModal2={()=>setShowModal(true)}/>
    <HowItWorks />
    <Beneficios setShowModal2={()=>setShowModal(true)}/>
    <IA setShowModal2={()=>setShowModal(true)}/>
    <NoPierdas setShowModal2={()=>setShowModal(true)}/>
    {/* <FAQ /> */}
    <Footer/>
    <Form isVisible={showModal} onClose={()=>setShowModal(false)}></Form>
    </Fragment>
    
  );
}


