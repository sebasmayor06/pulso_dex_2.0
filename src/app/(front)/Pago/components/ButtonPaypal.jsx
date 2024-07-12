"use client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export const ButtonPaypal = ({ email }) => {
  console.log(email, "email ButtonPaypal");

  return (
    <div className="w-full">
      <PayPalScriptProvider
        options={{
          clientId: "AVK8dZC7QexmcuR08qLV7h-Jpdw1Pz46jIm76BviCq-jizRNo2mdTCUWxIgyxBIwnb6u87LLBfKSnqU9",
        }}
      >
        <PayPalButtons
          style={{ layout: "horizontal", color: "blue", height: 40 }}
          // fundingSource="paypal"

          createOrder={async () => {
            const res = await fetch("/api/checkout/payment-paypal", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            });
            if (!res.ok) {
              throw new Error("Failed to create order");
            }
            const order = await res.json();
            console.log(order, "order");
            return order.id;
          }}

          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order, "order");
          }}

          onCancel={(data) => {
            console.log(data, "cancel");
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};
