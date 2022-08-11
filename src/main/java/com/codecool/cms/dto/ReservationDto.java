package com.codecool.cms.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public class ReservationDto {
    // Field(s)
    private UUID id;
    private int courtNumber;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    @JsonProperty("startTime")
    private LocalDateTime startTime;

    @JsonProperty("endTime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime endTime;
    private UUID userId;
    private BigDecimal price;
    private Boolean paid;

    public ReservationDto(UUID id, int courtNumber, LocalDateTime startTime, LocalDateTime endTime, UUID userId, BigDecimal price, Boolean paid) {
        this.id = id;
        this.courtNumber = courtNumber;
        this.startTime = startTime;
        this.endTime = endTime;
        this.userId = userId;
        this.price = price;
        this.paid = paid;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
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

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
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
