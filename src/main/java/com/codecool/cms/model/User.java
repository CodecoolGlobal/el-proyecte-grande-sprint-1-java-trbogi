package com.codecool.cms.model;

import java.nio.file.Path;
import java.util.UUID;

    public class User {

        // Field(s)
        private final UUID id;
        private String name;
        private String email;
        private int phone;
        private String password;
        private UserRole role;
        private Path profilePicture;
        private Address address;

        // Constructor(s)
        public User(UUID id, String name, String email, int phone, String password, UserRole role, Path profilePicture) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.password = password;
            this.role = role;
            this.profilePicture = profilePicture;
        }

        // Getter(s), Setter(s)
        public UUID getId() {
            return id;
        }

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
