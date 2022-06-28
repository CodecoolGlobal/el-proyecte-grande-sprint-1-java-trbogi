package com.codecool.cms.controller;

import com.codecool.cms.data.dto.NewUserDto;
import com.codecool.cms.model.Address;
import com.codecool.cms.model.User;
import com.codecool.cms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user/")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService userService;

    // Create new user
    @PostMapping("create-user")
    public void createUser(@RequestBody NewUserDto newUserData) {
        userService.createUser(newUserData);
    }

    // Get user data
    @GetMapping("get-user/{userID}")
    public User getUserByUserId(@PathVariable String userID) {
        return null;
    }

    // Modify user data
    @PatchMapping("modify-user/{userID}")
    public void ModifyUserByUserId(@PathVariable String userID, @RequestBody User modifiedUserData) {
    }

    // Get address of user
    @GetMapping("get-user-address/{userID}")
    public Address getUserAddressByUserId(@PathVariable String userID) {
        return null;
    }

}
