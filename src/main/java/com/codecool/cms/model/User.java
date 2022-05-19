package com.codecool.cms.model;

import java.nio.file.Path;
import java.util.UUID;

    public class User {
        private final UUID id;
        private String name;
        private String email;
        private int phone;
        private UserRole role;
        private Path profilePicture;
        private Address address;

        public User(UUID id, String name, String email, int phone, UserRole role, Path profilePicture) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.role = role;
            this.profilePicture = profilePicture;
        }

        public UUID getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public String getEmail() {
            return email;
        }

        public int getPhone() {
            return phone;
        }

        public UserRole getRole() {
            return role;
        }

        public Path getProfilePicture() {
            return profilePicture;
        }

        public Address getAddress() {
            return address;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public void setPhone(int phone) {
            this.phone = phone;
        }

        public void setRole(UserRole role) {
            this.role = role;
        }

        public void setProfilePicture(Path profilePicture) {
            this.profilePicture = profilePicture;
        }

        public void setAddress(Address address) {
            this.address = address;
        }
    }
