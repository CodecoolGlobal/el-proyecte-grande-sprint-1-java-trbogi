package com.codecool.cms.service;

import com.codecool.cms.data.ReservationRepository;
import com.codecool.cms.data.UserRepository;
import com.codecool.cms.dto.ReservationDto;
import com.codecool.cms.model.Reservation;
import com.codecool.cms.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    UserRepository userRepository;

    public void addReservation(Reservation reservation){
        reservationRepository.save(reservation);
    }

    public List<ReservationDto> getReservationsOfWeekByCourt(int courtNumber, LocalDateTime startOfWeek){
        LocalDateTime nextMonday = startOfWeek.plusWeeks(1);
        List<Reservation> reservations = reservationRepository.findByCourtNumberAndStartTimeBetween(courtNumber, startOfWeek, nextMonday);
        List<ReservationDto> dtos = new ArrayList<>();
        for (Reservation reservation:reservations
             ) {
            UUID userId = reservation.getUser() != null ? reservation.getUser().getId(): null;
            dtos.add(new ReservationDto(reservation.getId(), reservation.getCourtNumber(), reservation.getStartTime(), reservation.getEndTime(), userId, reservation.getPrice(), reservation.getPaid()));
        }
        return dtos;
    }

    public Reservation createReservation(UUID userId, LocalDateTime startTime, int courtNumber){
        User user = userRepository.getById(userId);
        Reservation reservation = new Reservation(courtNumber, startTime, user);
        reservationRepository.save(reservation);
        return reservation;
    }

    public List<Reservation> getReservationsByIds(Iterable<UUID> uuids){
        return reservationRepository.findAllById(uuids);
    }

    public void removeReservation(UUID reservationId){
        reservationRepository.deleteById(reservationId);
    }

    public void removeALlReservationByUserId(UUID userId){
        reservationRepository.deleteAllByUserId(userId);
    }

    public void payForReservations(List<Reservation> reservations ){
        for (Reservation reservation: reservations) {
            reservation.setPaid(true);
        }
        reservationRepository.saveAll(reservations);
    }

}
