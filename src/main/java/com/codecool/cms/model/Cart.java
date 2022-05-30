package com.codecool.cms.model;

import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Cart {

    // Field(s)
    UUID id;
    UUID userId;
    Map<Product, Integer> products;
    List<Reservation> reservations;

    // Constructor(s)
    public Cart(UUID id, UUID userId) {
        this.id = id;
        this.userId = userId;
    }

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
