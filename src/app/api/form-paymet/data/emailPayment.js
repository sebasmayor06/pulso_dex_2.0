
import { db } from "../../../../libs/db";
export const getPaymentEmail = async (email) => {
  try {
    const emailPayment = await db.payment.findUnique({
      where: {
        email,
      },
    });

    return emailPayment;
  } catch {
    return null;
  }
};
