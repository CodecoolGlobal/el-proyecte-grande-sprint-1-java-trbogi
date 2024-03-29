import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from "./PaymentForm";
import {useContext, useEffect, useState} from "react";
import ReservationsContext from "../context/ReservationsContext";

const PUBLIC_KEY = "pk_test_51LUUebJLOuDYsmQO10IoM7xAuJZUiZje38oOtDvzwXkOvMwjgUkVt9oPW78mJgsre4vfspXF7ZGrAlvZt7HuXxD100CZs2cXUe";

const stripeTestPromise = loadStripe(PUBLIC_KEY,{locale: 'us'});

const StripeContainer = () => {
    const {reservationsInCart} = useContext(ReservationsContext)
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:8080/api/payment/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: reservationsInCart }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div>
            {clientSecret && (
                <Elements stripe={stripeTestPromise} options={options}>
                    <PaymentForm/>
                </Elements>)}
        </div>
    )
}

export default StripeContainer