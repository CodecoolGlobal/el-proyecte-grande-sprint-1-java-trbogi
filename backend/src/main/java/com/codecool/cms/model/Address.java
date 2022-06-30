package com.codecool.cms.model;

import javax.persistence.*;
import java.util.UUID;

@Entity(name = "address")
public class Address {

    // Field(s)
    @Column(name = "id") @Id @GeneratedValue(strategy = GenerationType.AUTO) private UUID id;
    @Column(name = "zip_code") private Integer zipCode;
    @Column(name = "country") private String country;
    @Column(name = "city") private String city;
    @Column(name = "address_line") private String addressLine;

    // Constructor(s)
    public Address() {

    }

    // Getter(s), Setter(s)
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Integer getZipCode() {
        return zipCode;
    }

    public void setZipCode(Integer zipCode) {
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

    // Overridden Method(s)
    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", zipCode=" + zipCode +
                ", country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", addressLine='" + addressLine + '\'' +
                '}';
    }

}
