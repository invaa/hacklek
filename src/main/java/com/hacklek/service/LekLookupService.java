package com.hacklek.service;

import com.hacklek.dtos.MedicineDto;
import com.hacklek.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LekLookupService  {

    @Autowired
    private MedicineRepository medicineRepository;

    public MedicineDto lookupMedicine(String name) {
        // query db and make result

        // TODO stub result
        MedicineDto result = new MedicineDto();
        result.setEan("EAN");
        result.setId(123L);
        result.setName("Paracetamol");

        return result;
    }

}
