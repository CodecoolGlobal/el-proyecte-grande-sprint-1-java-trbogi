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

    public void createUser(User user) {
        boolean isCoach = user.getRole().equals(UserRole.COACH);
        boolean existsAdminInDb = user.getRole().equals(UserRole.ADMIN) && userRepository.existsByRole(UserRole.ADMIN);
        if ( isCoach || existsAdminInDb ) {
            user.setEnabled(false);
        } else {
            user.setEnabled(true);
        }

        userRepository.save(user);
    }

    public User getUserByUserId(UUID id) {
        return userRepository.getUserById(id);
    }

}