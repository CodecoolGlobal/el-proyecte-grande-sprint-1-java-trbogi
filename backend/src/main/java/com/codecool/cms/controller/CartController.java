package com.codecool.cms.controller;

import com.codecool.cms.model.Reservation;
import com.codecool.cms.service.CartService;
import com.codecool.cms.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/cart/")
public class CartController {

    @Autowired
    CartService cartService;

    @Autowired
    ReservationService reservationService;

    // Get cart content: reservations
    @GetMapping("get-cart-reservations/{userId}")
    public List<Reservation> getReservationsFromCartByUserId(@PathVariable UUID userId) {
        List<Object> ids = cartService.getReservationsFromCartByUserId(userId);
        List<UUID> uuids = new ArrayList<>();
        for (Object e : ids) {
            String s = (String) e;
            UUID uuid = UUID.fromString(s);
            uuids.add(uuid);
        }
        return reservationService.getReservationsByIds(uuids);
    }


    @GetMapping("get-cart-reservations/{userId}/{courtNumber}")
    public List<Reservation> getReservationsFromCartByUserIdAndCourtNumber(@PathVariable UUID userId, @PathVariable int courtNumber) {
        List<Object> ids = cartService.getReservationsFromCartByUserId(userId);
        List<UUID> uuids = new ArrayList<>();
        for (Object e : ids) {
            String s = (String) e;
            UUID uuid = UUID.fromString(s);
            uuids.add(uuid);
        }
        return reservationService.getReservationsByIds(uuids).stream()
                .filter(reservation -> reservation.getCourtNumber() == courtNumber)
                .collect(Collectors.toList());
    }

    // Empty cart
    @PostMapping("pay-empty-cart/{userId}")
    public void payAndEmptyCart(@PathVariable UUID userId, @RequestBody List<Reservation> reservations) {
        cartService.removeAllReservationsByUserId(userId);
        reservationService.payForReservations(reservations, userId);
    }

    // Add reservation (court, practice) to cart
    @PostMapping ("add-reservation")
    public UUID addReservationToCart(@RequestBody Map<String, String> reservationInfo) {
        UUID bookingUserId = UUID.fromString(reservationInfo.get("userId"));
        String start = reservationInfo.get("startTime");
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime startTime = LocalDateTime.parse(start, formatter);
        int courtNumber = Integer.parseInt(reservationInfo.get("courtNumber"));
        return cartService.addReservationToCart(bookingUserId, startTime, courtNumber);
    }

    // Delete reservation (court, practice) from cart
    @DeleteMapping ("delete-reservation/{reservationId}")
    public void removeReservationFromCart(@PathVariable UUID reservationId) {
        cartService.removeReservationFromCart(reservationId);
        reservationService.removeReservation(reservationId);
    }

    // Delete all court reservation from cart
    @DeleteMapping ("delete-all-court-reservation/{userId}")
    public void removeAllCourtReservationFromCart(@PathVariable UUID userId) {
        cartService.removeAllReservationsByUserId(userId);
        reservationService.removeALlReservationByUserId(userId);
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
