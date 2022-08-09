package com.codecool.cms.service;

import com.codecool.cms.data.CartRepository;
import com.codecool.cms.data.UserRepository;
import com.codecool.cms.dto.ReservationDto;
import com.codecool.cms.model.Cart;
import com.codecool.cms.model.Reservation;
import com.codecool.cms.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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

    public UUID addReservationToCart(UUID userId, LocalDateTime startTime, int courtNumber){
        Reservation reservation = reservationService.createReservation(userId, startTime, courtNumber);
        Cart cart = cartRepository.getCartByUser(userRepository.getById(userId));
        List<Reservation> reservations = cart.getReservations();
        reservations.add(reservation);
        cart.setReservations(reservations);
        cartRepository.save(cart);
        return reservation.getId();
    }

    public List<ReservationDto> getReservationsFromCartByUserId(UUID userId){
        User user = userRepository.getById(userId);
        Cart cart = cartRepository.getCartByUser(user);
        List<Object> ids = cartRepository.getReservationsFromCart(cart.getId());
        List<UUID> uuids = new ArrayList<>();
        for (Object e : ids) {
            String s = (String) e;
            UUID uuid = UUID.fromString(s);
            uuids.add(uuid);
        }

        List<Reservation> reservations = reservationService.getReservationsByIds(uuids);
        List<ReservationDto> dtos = new ArrayList<>();
        for (Reservation reservation:reservations
        ) {
            dtos.add(new ReservationDto(reservation.getId(), reservation.getCourtNumber(), reservation.getStartTime(), reservation.getEndTime(), reservation.getUser().getId(), reservation.getPrice(), reservation.getPaid()));
        }
        return dtos;

    }

    public List<ReservationDto> getReservationsFromCartByUserIdAndCourtNumber( UUID userId, int courtNumber){
        List<ReservationDto> reservationDtos = getReservationsFromCartByUserId(userId);
        return reservationDtos.stream()
                .filter(reservation -> reservation.getCourtNumber() == courtNumber)
                .collect(Collectors.toList());
    }

    public void removeReservationFromCart(UUID reservationId){
        cartRepository.removeReservationById(reservationId);
    }

    public void removeAllReservationsByUserId(UUID userId){
        UUID cartId = cartRepository.getCartByUser(userRepository.getById(userId)).getId();
        cartRepository.removeAllReservations(cartId);
    }
}
