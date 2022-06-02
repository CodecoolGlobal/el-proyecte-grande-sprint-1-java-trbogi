package com.codecool.cms.controller;

import com.codecool.cms.model.Court;
import com.codecool.cms.model.Reservation;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/reservation/")
public class ReservationController {

    // Add new reservation
    @PostMapping("add-reservation")
    public void addNewReservation(@RequestBody Reservation reservation) {
    }

    // Get reservations of the given week by court
    @GetMapping("get-reservation/{courtNumber}/{firstDayOfWeek}")
    public List<Reservation> getReservationsOfWeekByCourt(@PathVariable Integer courtNumber,
                                                          @PathVariable LocalDateTime firstDayOfWeek) {
        return null;
    }

    // Get courts
    @GetMapping("get-courts/")
    public List<Court> getCourts() {
        return null;
    }

    // Remove coach from reservation
    @PatchMapping("remove-coach/{reservationId}")
    public void removeCoachFromReservation(@PathVariable String reservationId) {
    }

    // Remove participant from practice
    @PatchMapping("remove-participant/{reservationId}/{userId}")
    public void removeParticipantFromReservation(@PathVariable String reservationId, @PathVariable String userId) {
    }

}

