package com.codecool.cms.service;

import com.codecool.cms.data.UserRepository;
import com.codecool.cms.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user =userRepository.findUserByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException(username);
        }
        return user;
    }
}
