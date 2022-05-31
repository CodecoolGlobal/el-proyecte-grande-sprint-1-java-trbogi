package com.codecool.cms.dto;

import com.codecool.cms.model.Address;
import com.codecool.cms.model.UserRole;

import java.nio.file.Path;

public class UserDto {

    // Field(s)
    private String name;
    private String email;
    private int phone;
    private String password;
    private UserRole role;
    private Path profilePicture;
    private Address address;

    // Getter(s), Setter(s)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public Path getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(Path profilePicture) {
        this.profilePicture = profilePicture;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
