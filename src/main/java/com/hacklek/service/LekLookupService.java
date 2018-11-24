package com.hacklek.service;

import com.hacklek.dtos.MedicineDto;
import com.hacklek.dtos.PackageDto;
import com.hacklek.dtos.SubstanceDto;
import com.hacklek.entity.Medicine;
import com.hacklek.entity.Package;
import com.hacklek.entity.Substance;
import com.hacklek.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
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

        Medicine medicine = medicineList.get(0); // get first one
        MedicineDto dto = convertToMedicineDto(medicine);

        return dto;
    }

    private MedicineDto convertToMedicineDto(Medicine medicine) {
        MedicineDto dto = new MedicineDto();

        dto.setAtcCode(medicine.getAtcCode());
        dto.setId(medicine.getId());
        dto.setName(medicine.getName());

        Substance substance = medicine.getSubstance();
        dto.setSubstance(convertToSubstanceDto(substance));

        List<Package> packages = medicine.getPackages();
        List<PackageDto> packageDtos = new ArrayList<>();

        for(Package pack : packages) {
            packageDtos.add(convertToPackageDto(pack));
        }
        dto.setPackages(packageDtos);


        return dto;
    }

    private PackageDto convertToPackageDto(Package pack) {
        PackageDto dto = new PackageDto();

        dto.setPrice(pack.getPrice());
        dto.setId(pack.getId());
        dto.setEan(pack.getEan());
        dto.setName(pack.getName());
        dto.setRefundPrice(pack.getRefundPrice());

        return dto;
    }

    private SubstanceDto convertToSubstanceDto(Substance substance) {
        SubstanceDto dto = new SubstanceDto();
        dto.setName(substance.getName());
        dto.setId(substance.getId());

        return dto;
    }

}
