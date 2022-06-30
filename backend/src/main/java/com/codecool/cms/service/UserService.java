package com.codecool.cms.service;

import com.codecool.cms.data.UserRepository;
import com.codecool.cms.model.User;
import com.codecool.cms.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CartService cartService;

    public void createUser(User user) {
        boolean isCoach = user.getRole().equals(UserRole.COACH);
        boolean existsAdminInDb = user.getRole().equals(UserRole.ADMIN) && userRepository.existsByRole(UserRole.ADMIN);
        if ( isCoach || existsAdminInDb ) {
            user.setEnabled(false);
        } else {
            user.setEnabled(true);
        }
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));

        userRepository.save(user);

        cartService.createCartForUser(user);
    }

    public User getUserByUserId(UUID id) {
        return userRepository.getUserById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException(String.format("Username %s not found", username));
        }
        return userRepository.findUserByUsername(username);
    }
}