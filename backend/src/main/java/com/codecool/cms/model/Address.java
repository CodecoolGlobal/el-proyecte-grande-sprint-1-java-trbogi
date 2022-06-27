package com.codecool.cms.model;

import java.util.UUID;

public class Address {

    // Field(s)
    private final UUID id;
    private int zipCode;
    private String country;
    private String city;
    private String addressLine;

    // Constructor(s)
    public Address(UUID id, int zipCode, String country, String city, String addressLine) {
        this.id = id;
        this.zipCode = zipCode;
        this.country = country;
        this.city = city;
        this.addressLine = addressLine;
    }

    // Getter(s), Setter(s)
    public UUID getId() {
        return id;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddressLine() {
        return addressLine;
    }

    public void setAddressLine(String addressLine) {
        this.addressLine = addressLine;
    }

}
