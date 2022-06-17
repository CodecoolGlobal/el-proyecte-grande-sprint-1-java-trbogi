package com.codecool.cms.service;

import com.codecool.cms.data.CartRepository;
import com.codecool.cms.model.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    public void createCartForUser(UUID userId){

    }
}
