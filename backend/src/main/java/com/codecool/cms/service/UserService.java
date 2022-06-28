package com.codecool.cms.service;

import com.codecool.cms.data.UserRepository;
import com.codecool.cms.model.User;
import com.codecool.cms.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CartService cartService;

    public void createUser(User user) {
        // Save user to db
        boolean isCoach = user.getRole().equals(UserRole.COACH);
        boolean existsAdminInDb = user.getRole().equals(UserRole.ADMIN) && userRepository.existsByRole(UserRole.ADMIN);
        if ( isCoach || existsAdminInDb ) {
            user.setEnabled(false);
        } else {
            user.setEnabled(true);
        }
        userRepository.save(user);
        // Create cat for user
        cartService.createCartForUser(user);
    }

    public User getUserByUserId(UUID id) {
        return userRepository.getUserById(id);
    }

}