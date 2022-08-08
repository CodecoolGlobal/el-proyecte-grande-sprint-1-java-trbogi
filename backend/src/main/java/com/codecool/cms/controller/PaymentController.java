package com.codecool.cms.controller;

import com.codecool.cms.dto.CreatePaymentResponse;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import com.codecool.cms.dto.CreatePayment;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/payment/")
public class PaymentController {

    @PostMapping("/create-payment-intent")
    public CreatePaymentResponse getPaymentId(@RequestBody CreatePayment createPayment) throws StripeException {
        Stripe.apiKey = "sk_test_51LUUebJLOuDYsmQOMljuw2KrTWU3CHwuD034dNBD7rTm7OQiWJsARJZ8RqRxsCDyuUX5D8iHlrDrYbsWk9yFOwxI00GkB2MiuD";
        PaymentIntentCreateParams params =
                PaymentIntentCreateParams.builder()
                        .setAmount(15 * 100L) //TODO:remove hard coded price (with CreatePayment)
                        .setCurrency("eur")
                        .setAutomaticPaymentMethods(
                                PaymentIntentCreateParams.AutomaticPaymentMethods
                                        .builder()
                                        .setEnabled(true)
                                        .build()
                        )
                        .build();
        // Create a PaymentIntent with the order amount and currency
        PaymentIntent paymentIntent = PaymentIntent.create(params);

        return new CreatePaymentResponse(paymentIntent.getClientSecret());
    }
}
