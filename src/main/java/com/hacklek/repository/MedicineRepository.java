package com.hacklek.repository;

import com.hacklek.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, UUID> {

    List<Medicine> findByNameIgnoreCaseContaining(String name);
    List<Medicine> findByName(String name);

}
