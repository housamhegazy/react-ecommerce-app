import { useEffect, useRef } from "react";
export default function Paypal({price}) {
    const paypal = useRef(null)
    useEffect(()=>{
        // @ts-ignore
        window.paypal.Buttons({
            createOrder:(data,actions,err)=>{
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units:[
                        {
                            description:"cool looking table",
                            amount:{
                                currency_code:"CAD",
                                value:price
                            }
                        }
                    ]
                })
            },
            onApprove:async (data, actions)=>{
                const order = await actions.order.capture()
                console.log(order )
            },
            onError:(err)=>{
                console.log(err)
            }
        }).render(paypal.current) 
    },[price])
  return (
    <div>
     <div ref={paypal}></div>
    </div>
  );
}
