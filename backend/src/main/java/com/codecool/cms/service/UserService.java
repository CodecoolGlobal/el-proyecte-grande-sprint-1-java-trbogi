package com.codecool.cms.service;

import com.codecool.cms.data.UserRepository;
import com.codecool.cms.data.dto.NewUserDto;
import com.codecool.cms.model.User;
import com.codecool.cms.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void createUser(NewUserDto newUserData) {

        String name = newUserData.getName();
        String email = newUserData.getEmail();
        String password = newUserData.getPassword();
        UserRole role = UserRole.valueOf(newUserData.getRole());

        User user = new User(name, email, password, role);

        // Determine enabled state of user
        boolean isCoach = role.equals(UserRole.COACH);
        boolean existsAdminInDb = role.equals(UserRole.ADMIN) && userRepository.existsByRole(UserRole.ADMIN);
        if ( isCoach || existsAdminInDb ) {
            user.setEnabled(false);
        } else {
            user.setEnabled(true);
        }

        userRepository.save(user);
    }

    public User getUserByUserId(String userID) {
        UUID id = UUID.fromString(userID);
        return userRepository.getUserById(id);
    }

}