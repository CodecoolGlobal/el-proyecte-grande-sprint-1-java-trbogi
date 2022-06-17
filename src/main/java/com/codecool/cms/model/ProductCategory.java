package com.codecool.cms.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class ProductCategory {

    // Field(s)
    @Id
    @GeneratedValue
    private UUID id;
    private String name;

    // Constructor(s)
    public ProductCategory(UUID id, String name) {
        this.id = id;
        this.name = name;
    }

    public ProductCategory() {

    }

    // Getter(s), Setter(s)
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
