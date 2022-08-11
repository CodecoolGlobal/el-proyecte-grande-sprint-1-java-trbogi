package com.codecool.cms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Reservation {
    public static final BigDecimal DEFAULT_PRICE = new BigDecimal(4000);
    private static final long DEFAULT_INTERVAL_IN_HOURS = 2;

    // Field(s)
    @Id
    @GeneratedValue
    private UUID id;

    private int courtNumber;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    @JsonProperty("startTime")
    private LocalDateTime startTime;

    @JsonProperty("endTime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime endTime;

    @OneToOne
    private User coach;

    @OneToOne
    private User user;
    private BigDecimal price;
    private Boolean paid;

    // Constructor(s)
    public Reservation(UUID id, int courtNumber, LocalDateTime start, LocalDateTime end, BigDecimal price) {
        this.id = id;
        this.courtNumber = courtNumber;
        this.startTime = start;
        this.endTime = end;
        this.price = price;
        this.paid = false;
    }

    public Reservation(int courtNumber, LocalDateTime start, User user) {
        this.courtNumber = courtNumber;
        this.startTime = start;
        setEndTime();
        this.price = DEFAULT_PRICE;
        this.user = user;
        this.paid = false;
    }


    public Reservation() {

    }

    // Getter(s), Setter(s)
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setId(UUID id){
        this.id = id;
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

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime start) {
        this.startTime = start;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime end) {
        this.endTime = end;
    }

    public void setEndTime() {
        this.endTime = startTime.plusHours(DEFAULT_INTERVAL_IN_HOURS);
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

    public Boolean getPaid() {
        return paid;
    }

    public void setPaid(Boolean paid) {
        this.paid = paid;
    }
}
