package com.hacklek.repository;

import com.hacklek.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

    List<Medicine> findByNameIgnoreCaseContaining(String name);

    List<Medicine> findByNameIgnoreCaseStartsWith(String name);

    @Query("select m from Medicine m where m.substance.id = ?1")
    List<Medicine> findBySubstanceId(Long id);

}
