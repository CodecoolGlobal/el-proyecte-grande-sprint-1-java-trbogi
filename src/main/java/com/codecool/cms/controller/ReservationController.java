package com.codecool.cms.controller;

import com.codecool.cms.model.Court;
import com.codecool.cms.model.Reservation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/reservation/")
public class ReservationController {

    // Get courts
    @GetMapping("get/courts/")
    public List<Court> getCourts() {
        return null;
    }

    // Get reservations by court
    @GetMapping("get/{courtNumber}")
    public List<Reservation> getReservationsByCourt(@PathVariable Integer courtNumber) {
        return null;
    }

}
