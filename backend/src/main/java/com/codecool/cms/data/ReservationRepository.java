package com.codecool.cms.data;

import com.codecool.cms.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface ReservationRepository extends JpaRepository<Reservation, UUID> {
    List<Reservation> findByCourtNumberAndStartTimeBetween(int courtNumber, LocalDateTime monday, LocalDateTime nextMonday);

    @Override
    List<Reservation> findAllById(Iterable<UUID> uuids);

    void deleteById(UUID reservationId);
}
