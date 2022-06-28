package com.codecool.cms.model;

import javax.persistence.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Entity
public class Cart {

    // Field(s)
    @Id
    @GeneratedValue
    UUID id;

    @OneToOne
    User user;


    @ElementCollection
    @CollectionTable(name = "cart_content")
    @Column(name = "quantity")
    //private Map<Phone, Date> phoneRegister = new HashMap<>();
    Map<Product, Integer> products = new HashMap<>();
    @OneToMany
    List<Reservation> reservations;

    // Constructor(s)
    public Cart(UUID id, User user) {
        this.id = id;
        this.user = user;
    }

    public Cart() {

    }

    // Getter(s), Setter(s)
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public User getUserId() {
        return user;
    }

    public void setUserId(User user) {
        this.user = user;
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
