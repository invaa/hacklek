package com.hacklek.service;

import com.hacklek.dtos.MedicineDto;
import com.hacklek.dtos.PackageDto;
import com.hacklek.dtos.SubstanceDto;
import com.hacklek.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

@Service
public class LekLookupService  {

    @Autowired
    private MedicineRepository medicineRepository;

    public MedicineDto lookupMedicine(String name) {
        // query db and make result

        // TODO stub result
        MedicineDto m1 = new MedicineDto();
        m1.setEan("EAN");
        m1.setId(123L);
        m1.setName("Paracetamol");

        PackageDto p1 = new PackageDto();
        p1.setEan("EAN");
        p1.setId(123L);
        p1.setPrice(new BigDecimal(100));

        PackageDto p2 = new PackageDto();
        p2.setEan("EAN");
        p2.setId(234L);
        p2.setPrice(new BigDecimal(200));

        m1.setPackages(Arrays.asList(p1, p2));

        SubstanceDto s1 = new SubstanceDto();
        s1.setId(123L);
        s1.setName("Substance1");

        SubstanceDto s2 = new SubstanceDto();
        s2.setId(123L);
        s2.setName("Substance2");

        m1.setSubstances(Arrays.asList(s1, s2));

        return m1;
    }

}
