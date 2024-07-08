import { NextResponse } from 'next/server';
import { getPaymentEmail } from "./data/emailPayment";

import { db } from "../../../libs/db";

export async function POST(request) {
  try {
    const {
      email,
      celular,
      medioDePago,
      nombreTarjeta,
      pais,
      total,
      codigoZip,
      modo,
    } = await request.json();

    if (
      !email ||
      !celular ||
      !medioDePago ||
      !nombreTarjeta ||
      !pais ||
      !total ||
      !codigoZip ||
      !modo
    ) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    console.log(email, celular, medioDePago, nombreTarjeta, pais, total, "llegoo 1");

    const existingEmail = await getPaymentEmail(email);

    if (existingEmail) {
      return NextResponse.json({ error: "Email en uso" }, { status: 409 });
    }

    console.log(email, celular, medioDePago, nombreTarjeta, pais, total, "llegoo 2");

    const newDataPayment = await db.payment.create({
      data: {
        email,
        celular,
        medioDePago,
        nombreTarjeta,
        pais,
        codigoZip,
        montoTotal: total,
        modoTarjeta: modo,
        estadoPago: "pendiente",
      },
    });

    console.log(newDataPayment, "llegoo 3");

    return NextResponse.json({ message: "correcto" });
  } catch (error) {
    console.log(error, "err");
    return NextResponse.json({ error: "error en el servidor" }, { status: 500 });
  }
}

