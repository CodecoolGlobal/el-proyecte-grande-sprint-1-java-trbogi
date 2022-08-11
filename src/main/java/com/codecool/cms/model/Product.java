package com.codecool.cms.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
public class Product {

    // Field(s)
    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    private String description;
    private BigDecimal price;
    @OneToOne
    private ProductCategory productCategory;

    // Constructor(s)
    public Product(UUID id, String name, String description, BigDecimal price, ProductCategory productCategory) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.productCategory = productCategory;
    }

    public Product() {

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public ProductCategory getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(ProductCategory productCategory) {
        this.productCategory = productCategory;
    }

}
