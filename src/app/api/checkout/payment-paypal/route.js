import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";
import { db } from "../../../../libs/db";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function PUT(request) {
  const { email } = await request.json();
  if (!email) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  try {
    const data = await db.payment.findFirst({
      where: {
        email: email,
      },
    });

    console.log(data.id, "id");
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: data.montoTotal,
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: data.montoTotal,
              },
            },
          },
        },
      ],
    });

    console.log(request, "request");


    const response = await client.execute(request);

    console.log(response, "response");

    await db.payment.update({
      where: {
        id: data.id,
      },
      data: {
        paypalId: response.result.id,
        estadoPago: "aprobado",
      },
    });

    return NextResponse.json({
      message: "Transacción exitosa",
      id: response.result.id,
    });
  } catch (error) {
    return NextResponse.error({
      message: "Transacción fallida",
    });
  }
}
