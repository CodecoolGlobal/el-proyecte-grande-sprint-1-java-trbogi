package com.codecool.cms.model;

import java.util.UUID;

public class ProductCategory {

    // Field(s)
    private UUID id;
    private String name;

    // Constructor(s)
    public ProductCategory(UUID id, String name) {
        this.id = id;
        this.name = name;
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
