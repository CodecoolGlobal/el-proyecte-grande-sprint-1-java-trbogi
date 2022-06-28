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
        UserRole role = UserRole.valueOf(newUserData.getRole());    // TODO Consultation: A role-t azt milyen tipuskent kene tarolni az adatbazisban?

        User user = new User(name, email, password, role);          // TODO Consultation: Az UUID-t a backenden generaljuk, vagy az adatbazisban?
        userRepository.save(user);
    }

}
