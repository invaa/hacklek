package com.hacklek.service;

import com.hacklek.dtos.MedicineDto;
import com.hacklek.dtos.PackageDto;
import com.hacklek.dtos.SubstanceDto;
import com.hacklek.entity.Medicine;
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
        List<Medicine> medicineList = medicineRepository.findByNameIgnoreCaseContaining(name);

        if(medicineList == null || medicineList.isEmpty()) {
            return null;
        }

        Medicine medicineTest = medicineList.get(0);

        // TODO stub result
        MedicineDto m1 = new MedicineDto();
        m1.setAtcCode(medicineTest.getAtcCode());
        m1.setId(medicineTest.getId());
        m1.setName(medicineTest.getName());

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
