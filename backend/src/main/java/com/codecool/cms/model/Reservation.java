package com.codecool.cms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.UUID;

@Entity
public class Reservation {
    private final BigDecimal DEFAULT_PRICE = new BigDecimal(4000);
    private final long DEFAULT_INTERVAL_IN_HOURS = 2;

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

    @Column(
            nullable = true
    )
    private int participantLimit;

    @OneToOne
    private User coach;
    private BigDecimal price;

    @ElementCollection
    @JoinTable(name="participants_payment", joinColumns=@JoinColumn(name="id"))
    @MapKeyColumn (name="user")
    @Column(name="payment_status")
    private Map<User, Boolean> participants;

    // Constructor(s)
    public Reservation(UUID id, int courtNumber, LocalDateTime start, LocalDateTime end, int participantLimit, BigDecimal price) {
        this.id = id;
        this.courtNumber = courtNumber;
        this.startTime = start;
        this.endTime = end;
        this.participantLimit = participantLimit;
        this.price = price;
    }

    public Reservation(int courtNumber, LocalDateTime start, Map<User, Boolean> participants) {
        this.courtNumber = courtNumber;
        this.startTime = start;
        setEndTime();
        this.price = DEFAULT_PRICE;
        this.participants = participants;
    }


    public Reservation() {

    }

    // Getter(s), Setter(s)
    public Map<User, Boolean> getParticipants() {
        return participants;
    }

    public void setParticipants(Map<User, Boolean> participants) {
        this.participants = participants;
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
