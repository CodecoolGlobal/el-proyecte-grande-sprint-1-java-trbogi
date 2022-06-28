package com.codecool.cms.model;

import javax.persistence.*;
import java.util.UUID;

@Entity(name = "users")
public class User {

    // Field(s)
        @Column(name = "id") @Id @GeneratedValue(strategy = GenerationType.AUTO) private UUID id;
        @Column(name = "name") private String name;
        @Column(name = "email") private String email;
        @Column(name = "phone") private int phone;
        @Column(name = "password") private String password;
        @Column(name = "role") @Enumerated(EnumType.STRING) private UserRole role;
        @Column(name = "enabled") private boolean enabled;
        @Column(name = "profile_picture") private String profilePicture;
        @JoinColumn(name="address_id") @OneToOne private Address address;

    // Constructor(s)
        public User() {

        }

    // Getter(s), Setter(s)
        public UUID getId() {
            return id;
        }

        public void setId(UUID id) {
            this.id = id;
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

        public boolean isEnabled() {
            return enabled;
        }

        public void setEnabled(boolean enabled) {
            this.enabled = enabled;
        }

        public String getProfilePicture() {
            return profilePicture;
        }

        public void setProfilePicture(String profilePicture) {
            this.profilePicture = profilePicture;
        }

        public Address getAddress() {
            return address;
        }

        public void setAddress(Address address) {
                this.address = address;
            }

    // Overridden method(s)
        @Override
        public String toString() {
            return "User{" +
                    "id=" + id +
                    ", name='" + name + '\'' +
                    ", email='" + email + '\'' +
                    ", phone=" + phone +
                    ", password='" + password + '\'' +
                    ", role=" + role +
                    ", profilePicture='" + profilePicture + '\'' +
                    ", address=" + address +
                    '}';
        }

}
