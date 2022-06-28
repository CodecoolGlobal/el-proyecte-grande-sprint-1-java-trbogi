package com.codecool.cms.controller;

import com.codecool.cms.model.Court;
import com.codecool.cms.model.Reservation;
import com.codecool.cms.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/reservation/")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    // Add new reservation
    @PostMapping("add-reservation")
    public void addNewReservation(@RequestBody Reservation reservation) {
        reservationService.addReservation(reservation);
    }

    // Book new reservation
   @PostMapping("book-reservation")
    public void bookReservation(@RequestBody Map<String, String> reservationInfo) {
        UUID bookingUserId = UUID.fromString(reservationInfo.get("userId"));
        String start = reservationInfo.get("startTime");
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime startTime = LocalDateTime.parse(start, formatter);
        int courtNumber = Integer.parseInt(reservationInfo.get("courtNumber"));
        reservationService.bookReservation(bookingUserId, startTime, courtNumber);
    }

    // Get reservations of the given week by court
    @GetMapping("get-reservation/{courtNumber}/{firstDayOfWeek}")
    public List<Reservation> getReservationsOfWeekByCourt(@PathVariable Integer courtNumber, @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate firstDayOfWeek) {
        LocalDateTime day = firstDayOfWeek.atStartOfDay();
        return reservationService.getReservationsOfWeekByCourt(courtNumber, day);
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

