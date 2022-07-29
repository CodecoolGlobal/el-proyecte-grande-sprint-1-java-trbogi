package com.codecool.cms.service;

import com.codecool.cms.data.AddressRepository;
import com.codecool.cms.data.UserRepository;
import com.codecool.cms.model.Address;
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

    @Autowired UserRepository userRepository;
    @Autowired AddressRepository addressRepository;
    @Autowired CartService cartService;

    public void createUser(User user) {
        // Save user to database
        boolean isCoach = user.getRole().equals(UserRole.COACH);
        boolean existsAdminInDb = user.getRole().equals(UserRole.ADMIN) && userRepository.existsByRole(UserRole.ADMIN);
        if ( isCoach || existsAdminInDb ) {
            user.setEnabled(false);
        } else {
            user.setEnabled(true);
        }
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));

        userRepository.save(user);

        // Create cart for user
        cartService.createCartForUser(user);
    }

    public void modifyUserByUserId(UUID id, User modifiedUserData) {
        boolean authenticatedUserIdAndModifiedUserIdEquals = id.equals(modifiedUserData.getId());
        boolean userIdExistsInDatabase = userRepository.existsById(id);
        if (authenticatedUserIdAndModifiedUserIdEquals && userIdExistsInDatabase) {
            User existingUser = userRepository.getById(id);

            if (modifiedUserData.getUsername().equals("")) {
                modifiedUserData.setUsername(existingUser.getUsername());
            }
            if (modifiedUserData.getEmail() == null) {
                modifiedUserData.setEmail(existingUser.getEmail());
            }
            if (modifiedUserData.getPhone() == null) {
                modifiedUserData.setPhone(existingUser.getPhone());
            }
            if (modifiedUserData.getPhone() == null) {
                modifiedUserData.setPhone(existingUser.getPhone());
            }
            if (modifiedUserData.getPassword() == null) {
                modifiedUserData.setPassword(existingUser.getPassword());
            }
            if (modifiedUserData.getRole() == null) {
                modifiedUserData.setRole(existingUser.getRole());
            }
            if (modifiedUserData.getEnabled() == false) {
                modifiedUserData.setEnabled(existingUser.getEnabled());
            }
            if (modifiedUserData.getProfilePicture() == null) {
                modifiedUserData.setProfilePicture(existingUser.getProfilePicture());
            }
            if (modifiedUserData.getAddress() != null) {
                Address modifiedAddress = modifiedUserData.getAddress();
                Address newAddress = addressRepository.save(modifiedAddress);
                modifiedUserData.setAddress(newAddress);
            }
            userRepository.save(modifiedUserData);
        }
    }

    public User getUserByUserId(UUID id) {
        return userRepository.getById(id);
    }

    public Address getUserAddressByUserId (UUID id){
        Address address = userRepository.getById(id).getAddress();
        return address;
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