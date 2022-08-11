package com.codecool.cms.controller;

import com.codecool.cms.model.Address;
import com.codecool.cms.model.User;
import com.codecool.cms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/user/")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService userService;

    // Create new user
    @PostMapping("create-user")
    public void createUser(@RequestBody User user) {
        userService.createUser(user);
    }

    // Get user data
    @GetMapping("get-user/{userID}")
    public User getUserByUserId(@PathVariable UUID userID) {
        return userService.getUserByUserId(userID);
    }

    // Modify user data
    @PatchMapping("modify-user/{userID}")
    public void modifyUserByUserId(@PathVariable UUID userID, @RequestBody User modifiedUserData) {
        userService.modifyUserByUserId(userID, modifiedUserData);
    }

    // Get address of user
    @GetMapping("get-user-address/{userID}")
    public Address getUserAddressByUserId(@PathVariable UUID userID) {
        return userService.getUserAddressByUserId(userID);
    }

}
