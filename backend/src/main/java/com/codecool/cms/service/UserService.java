package com.codecool.cms.service;

import com.codecool.cms.data.AddressRepository;
import com.codecool.cms.data.UserRepository;
import com.codecool.cms.model.Address;
import com.codecool.cms.model.User;
import com.codecool.cms.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

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
        userRepository.save(user);

        // Create cart for user
        cartService.createCartForUser(user);
    }

    public void modifyUserByUserId(UUID id, User modifiedUserData) {
        boolean authenticatedUserIdAndModifiedUserIdEquals = id.equals(modifiedUserData.getId());
        boolean userIdExistsInDatabase = userRepository.existsById(id);
        if (authenticatedUserIdAndModifiedUserIdEquals && userIdExistsInDatabase) {
            User existingUser = userRepository.getById(id);
            modifiedUserData.setEnabled(existingUser.getEnabled());
            if (existingUser.getAddress() == null) {
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

}