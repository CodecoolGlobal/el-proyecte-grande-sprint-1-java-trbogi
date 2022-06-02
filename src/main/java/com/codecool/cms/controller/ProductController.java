package com.codecool.cms.controller;

import com.codecool.cms.model.Product;
import com.codecool.cms.model.ProductCategory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/product/")
public class ProductController {

    // Get product categories
    @GetMapping("get-product-categories/")
    public ProductCategory getCartContentByUserId() {
        return null;
    }

    // Get products of a category
    @GetMapping("get-category/{categoryId}")
    public List<Product> getProductsOfCategory(@PathVariable String categoryId) {
        return null;
    }

}
