package com.codecool.cms.controller;

import com.codecool.cms.model.Cart;
import com.codecool.cms.model.Reservation;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart/")
public class CartController {

    // Get cart content
    @GetMapping("get-cart/{userId}")
    public Cart getCartContentByUserId(@PathVariable String userId) {
        return null;
    }

    // Empty cart
    @DeleteMapping("empty-cart/{cartId}")
    public void emptyCart(@PathVariable String cartId) {
    }

    // Add reservation (court, practice) to cart
    @PostMapping ("add-reservation/{cartId}")
    public String addReservationToCart(@PathVariable String cartId, @RequestBody Reservation reservation) {
        String reservationId = "";
        return reservationId;
    }

    // Delete reservation (court, practice) from cart
    @DeleteMapping ("delete-reservation/{cartId}/{reservationId}")
    public void removeReservationFromCart(@PathVariable String cartId, @PathVariable String reservationId) {
    }

    // Delete all court reservation from cart
    @DeleteMapping ("delete-all-court-reservation/{cartId}")
    public void removeAllCourtReservationFromCart(@PathVariable String cartId) {
    }

    // Remove all practice reservation from cart
    @DeleteMapping ("delete-all-practice-reservation/{cartId}")
    public void removeAllPracticeReservationFromCart(@PathVariable String cartId) {
    }

    // Add/Increase product to/in cart
    @PostMapping ("add-product-to-cart/{cartId}/{productId}")
    public void addProductToCart(@PathVariable String cartId, @PathVariable String productId) {
    }

    // Delete/Decrease product from/in cart
    @PatchMapping ("delete-product-form-cart/{cartId}/{productId}")
    public void removeProductFromCart(@PathVariable String cartId, @PathVariable String productId) {
    }

}
