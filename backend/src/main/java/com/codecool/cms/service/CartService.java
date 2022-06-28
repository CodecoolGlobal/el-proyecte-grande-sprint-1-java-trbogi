package com.codecool.cms.service;

import com.codecool.cms.data.CartRepository;
import com.codecool.cms.data.ReservationRepository;
import com.codecool.cms.model.Cart;
import com.codecool.cms.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;
    @Autowired
    ReservationRepository reservationRepository;

    public void createCartForUser(UUID userId){

    }

    public void addReservationToCart(UUID reservationId, UUID cartId){
        Cart cart = cartRepository.getById(cartId);
        Reservation reservation = reservationRepository.getById(reservationId);
        List<Reservation> reservations = cart.getReservations();
        reservations.add(reservation);
        cart.setReservations(reservations);
        cartRepository.save(cart);
    }
}
