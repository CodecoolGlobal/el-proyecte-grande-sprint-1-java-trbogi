package com.codecool.cms.data;

import com.codecool.cms.model.User;
import com.codecool.cms.model.UserRole;
import org.hibernate.usertype.UserType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    Boolean existsByRole(UserRole role);

    User getUserById(UUID id);

}
