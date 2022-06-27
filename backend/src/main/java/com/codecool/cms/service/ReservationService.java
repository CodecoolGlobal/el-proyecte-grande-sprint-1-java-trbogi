package com.codecool.cms.service;

import com.codecool.cms.data.ReservationRepository;
import com.codecool.cms.data.UserRepository;
import com.codecool.cms.model.Reservation;
import com.codecool.cms.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    UserRepository userRepository;

    public void addReservation(Reservation reservation){
        reservationRepository.save(reservation);
    }

    public List<Reservation> getReservationsOfWeekByCourt(int courtNumber, LocalDateTime startOfWeek){
        LocalDateTime nextMonday = startOfWeek.plusWeeks(1);
        return reservationRepository.findByCourtNumberAndStartTimeBetween(courtNumber, startOfWeek, nextMonday);
    }

    public void bookReservation(UUID userId, LocalDateTime startTime, int courtNumber){
        //User user = userRepository.getById(userId);
        //Test TODO: connect to user table
        User user = new User();
        userRepository.save(user);
        Map<User, Boolean> participants = new HashMap<>();
        participants.put(user, true);
        Reservation reservation = new Reservation(courtNumber, startTime, participants);
        reservationRepository.save(reservation);
    }

}
