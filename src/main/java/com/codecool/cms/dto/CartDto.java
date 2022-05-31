package com.codecool.cms.dto;

import com.codecool.cms.model.Product;
import com.codecool.cms.model.Reservation;

import java.util.List;
import java.util.Map;
import java.util.UUID;

public class CartDto {

    // Field(s)
    UUID id;
    UUID userId;
    Map<Product, Integer> products;
    List<Reservation> reservations;

    // Getter(s), Setter(s)
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public Map<Product, Integer> getProducts() {
        return products;
    }

    public void setProducts(Map<Product, Integer> products) {
        this.products = products;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

}
