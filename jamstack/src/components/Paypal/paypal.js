import React, { useEffect, useRef } from 'react'

export default function Paypal() {

    const paypal = useRef();

    const telescope = {
        price: 649,
        description: "Telescope Skywtacher 150/750",
        // img: "../../images/articles/skywatcher.jpg"
    };


    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{
                            description: telescope.description,
                            amount: {
                                currency_code: "EUR",
                                value: telescope.price
                            }
                        }]
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                       
                console.log(order);
            },
            onError: (err) => {
                console.log(err)
            }
        })
        .render(paypal.current)

    }, [])

    return (
        <>
            <div ref={paypal}></div>
        </>
    )
}

