package com.codecool.cms.service;

import com.codecool.cms.data.CartRepository;
import com.codecool.cms.data.UserRepository;
import com.codecool.cms.model.Cart;
import com.codecool.cms.model.Reservation;
import com.codecool.cms.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReservationService reservationService;

    public void createCartForUser(User user){
        cartRepository.save(new Cart(user));
    }

    public void addReservationToCart(UUID userId, LocalDateTime startTime, int courtNumber){
        Reservation reservation = reservationService.createReservation(userId, startTime, courtNumber);
        Cart cart = cartRepository.getCartByUser(userRepository.getById(userId));
        List<Reservation> reservations = cart.getReservations();
        reservations.add(reservation);
        cart.setReservations(reservations);
        cartRepository.save(cart);
    }

    public List<Object> getReservationsFromCartByUserId(UUID userId){
        User user = userRepository.getById(userId);
        Cart cart = cartRepository.getCartByUser(user);
        return cartRepository.getReservationsFromCart(cart.getId());
    }
}
