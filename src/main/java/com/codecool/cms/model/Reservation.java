package com.codecool.cms.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.UUID;

public class Reservation {
    private final UUID id;
    private int courtNumber;
    private LocalDateTime start;
    private LocalDateTime end;
    private int participantLimit;
    private User coach;
    private BigDecimal price;
    private Map<User, Boolean> participants;

    public Reservation(UUID id, int courtNumber, LocalDateTime start, LocalDateTime end, int participantLimit, BigDecimal price) {
        this.id = id;
        this.courtNumber = courtNumber;
        this.start = start;
        this.end = end;
        this.participantLimit = participantLimit;
        this.price = price;
    }

    public Map<User, Boolean> getParticipants() {
        return participants;
    }

    public void setParticipants(Map<User, Boolean> participants) {
        this.participants = participants;
    }

    public UUID getId() {
        return id;
    }

    public int getCourtNumber() {
        return courtNumber;
    }

    public void setCourtNumber(int courtNumber) {
        this.courtNumber = courtNumber;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
        this.end = end;
    }

    public int getParticipantLimit() {
        return participantLimit;
    }

    public void setParticipantLimit(int participantLimit) {
        this.participantLimit = participantLimit;
    }

    public User getCoach() {
        return coach;
    }

    public void setCoach(User coach) {
        this.coach = coach;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
