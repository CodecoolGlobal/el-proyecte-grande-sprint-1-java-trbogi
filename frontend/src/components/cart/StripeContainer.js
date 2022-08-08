import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from "./PaymentForm";

const StripeContainer = () => {
    const PUBLIC_KEY = "pk_test_51LUUebJLOuDYsmQO10IoM7xAuJZUiZje38oOtDvzwXkOvMwjgUkVt9oPW78mJgsre4vfspXF7ZGrAlvZt7HuXxD100CZs2cXUe";

    const stripeTestPromise = loadStripe(PUBLIC_KEY);

    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}

export default StripeContainer