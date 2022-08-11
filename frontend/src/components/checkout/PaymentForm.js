import {
    useElements,
    useStripe,
    PaymentElement
} from '@stripe/react-stripe-js'
import {useContext, useEffect, useState} from "react";
import '../../style/checkout.css'
import AuthContext from "../context/AuthContext";
import ReservationsContext from "../context/ReservationsContext";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const PaymentForm = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const {reservationsInCart} = useContext(ReservationsContext);

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const notifySuccessfulPayment = () => {
        toast.success('Successful payment!', {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const pay = () => {
        console.log(reservationsInCart)
        fetch(`http://localhost:8080/api/cart/pay-empty-cart/${user['userId']}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //TODO: 'Authentication': 'Bearer ' + authTokens['access_token']
            },
            body: JSON.stringify(reservationsInCart),
        })
            .then(response =>{
                if (response.ok){
                    console.log('Success: payment status changed')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const result = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
        }).then(function (result) {
            return result
        }).then(function (result){
            if (result.paymentIntent){
                pay()
            }
            return result
        });

        if (result.error) {
            if (result.error.type === "card_error" || result.error.type === "validation_error") {
                setMessage(result.error.message);
            } else {
                setMessage("An unexpected error occurred.");
            }
        }

        setIsLoading(false);

        if (!isLoading && !result.error){
            notifySuccessfulPayment();
            navigate("/reservation");
        }
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" />
                <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    )
}
export default PaymentForm
