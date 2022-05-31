package com.codecool.cms.controller;

import com.codecool.cms.dto.CartDto;
import com.codecool.cms.dto.ReservationDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart/")
public class CartController {

    // Get cart content
    @GetMapping("get/{cartId}")
    public CartDto getCartContentByUserId(@PathVariable String cartId) {
        return null;
    }

    // Empty cart
    @PatchMapping("patch/{cartId}")
    public void emptyCart(@PathVariable String cartId) {
    }

    // Add reservation (court, practice) to cart
    @PostMapping ("post/reservation/{cartId}/")
    public String addReservationToCart(@PathVariable String cartId, @RequestBody ReservationDto reservation) {
        String reservationId = "";
        return reservationId;
    }

    // Remove reservation (court, practice) from cart
    @PatchMapping ("patch/reservation/{cartId}/{reservationId}")
    public void removeReservationFromCart(@PathVariable String cartId, @PathVariable String reservationId) {
    }

    // Remove all court reservation from cart
    @DeleteMapping ("delete/all-court-reservation/{cartId}")
    public void removeAllCourtReservationFromCart(@PathVariable String cartId) {
    }

    // Remove all practice reservation from cart
    @PatchMapping ("patch/all-practice-reservation/{cartId}")
    public void removeAllPracticeReservationFromCart(@PathVariable String cartId) {
    }

    // Add/Increase product to/in cart
    @PostMapping ("post/product/{cartId}/{productId}")
    public void addProductToCart(@PathVariable String cartId, @PathVariable String productId) {
    }

    // Remove/Decrease product from/in cart
    @PatchMapping ("patch/product/{cartId}/{productId}")
    public void removeProductFromCart(@PathVariable String cartId, @PathVariable String productId) {
    }

}
