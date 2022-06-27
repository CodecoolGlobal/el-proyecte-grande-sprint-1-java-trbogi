package com.codecool.cms.service;

import com.codecool.cms.data.ReservationRepository;
import com.codecool.cms.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository repository;

    public void addReservation(Reservation reservation){
        repository.save(reservation);
    }

    public List<Reservation> getReservationsOfWeekByCourt(int courtNumber, LocalDateTime startOfWeek){
        LocalDateTime nextMonday = startOfWeek.plusWeeks(1);
        return repository.findByCourtNumberAndStartTimeBetween(courtNumber, startOfWeek, nextMonday);
    }
}
