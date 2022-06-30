package com.codecool.cms.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.UUID;

@Entity(name = "users")
public class User implements UserDetails {

    // Field(s)
        @Column(name = "id") @Id @GeneratedValue(strategy = GenerationType.AUTO) private UUID id;
        @Column(name = "username") private String username;
        @Column(name = "email") private String email;
        @Column(name = "phone") private Integer phone;
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

        @Override
        public String getUsername() {
            return username;
        }


        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return Arrays.asList(new SimpleGrantedAuthority(role.name()));
        }

        @Override
        public String getPassword() {
            return password;
        }


        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return enabled;
        }


        public void setUsername(String name) {
            this.username = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public Integer getPhone() {
            return phone;
        }

        public void setPhone(Integer phone) {
            this.phone = phone;
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

        public void setEnabled(boolean enabled) {
            this.enabled = enabled;
        }

        public boolean getEnabled() {
            return enabled;
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
                    ", name='" + username + '\'' +
                    ", email='" + email + '\'' +
                    ", phone=" + phone +
                    ", password='" + password + '\'' +
                    ", role=" + role +
                    ", profilePicture='" + profilePicture + '\'' +
                    ", address=" + address +
                    '}';
        }
}
