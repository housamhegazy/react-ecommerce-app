
//another way
// https://www.npmjs.com/package/@paypal/react-paypal-js
import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPal2({price}) {
    const initialOptions = {
        "client-id": "ATU0fi924cDLQHGJadU2B8VyrnJFLwU_6nwPk7xMCJ4Sb4bi-aLwsINm1uF_q6zJaP48tAJpPAXJjW_X",
        currency: "USD",
        intent: "capture",
    };

  return (
    <PayPalScriptProvider deferLoading={false} options={initialOptions}>
            <PayPalButtons 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: `${price}`,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
    </PayPalScriptProvider>
  )
}

export default PayPal2

