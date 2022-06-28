package com.codecool.cms.data;

import com.codecool.cms.model.Cart;
import com.codecool.cms.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CartRepository extends JpaRepository<Cart, UUID> {
    Cart getCartByUser(User user);
}
