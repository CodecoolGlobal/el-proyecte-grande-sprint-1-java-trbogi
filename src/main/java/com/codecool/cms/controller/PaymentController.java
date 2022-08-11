package com.codecool.cms.controller;

import com.codecool.cms.dto.CreatePaymentResponse;
import com.codecool.cms.model.Reservation;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import com.codecool.cms.dto.CreatePayment;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/payment/")
public class PaymentController {

    static BigDecimal calculateOrderAmount(Object[] items) {
        return Reservation.DEFAULT_PRICE.multiply(BigDecimal.valueOf(items.length));
    }

    @PostMapping("/create-payment-intent")
    public CreatePaymentResponse getPaymentId(@RequestBody CreatePayment createPayment) throws StripeException {
        Stripe.apiKey = "sk_test_51LUUebJLOuDYsmQOMljuw2KrTWU3CHwuD034dNBD7rTm7OQiWJsARJZ8RqRxsCDyuUX5D8iHlrDrYbsWk9yFOwxI00GkB2MiuD";
        PaymentIntentCreateParams params =
                PaymentIntentCreateParams.builder()
                        .setAmount(new Long(String.valueOf(calculateOrderAmount(createPayment.getItems()))) * 100L)
                        .setCurrency("huf")
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
