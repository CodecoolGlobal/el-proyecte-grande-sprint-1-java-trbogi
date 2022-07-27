package com.codecool.cms.data;

import com.codecool.cms.model.Cart;
import com.codecool.cms.model.Reservation;
import com.codecool.cms.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Transactional
public interface CartRepository extends JpaRepository<Cart, UUID> {
    Cart getCartByUser(User user);

    @Query(value = "SELECT  cast(reservations_id as varchar) FROM cart_reservations\n " +
            "WHERE cart_id = ?1", nativeQuery = true)
    List<Object> getReservationsFromCart(UUID cartId);

    @Modifying
    @Query(value = "DELETE FROM cart_reservations\n" +
            "WHERE reservations_id = ?1", nativeQuery = true)
    void removeReservationById(UUID reservationId);
}
