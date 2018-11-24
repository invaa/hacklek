package com.hacklek.service;

import com.hacklek.dtos.*;
import com.hacklek.entity.Medicine;
import com.hacklek.entity.Package;
import com.hacklek.entity.Substance;
import com.hacklek.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LekLookupService  {

    public static final String PRODUCT_DOSE_SEPARATOR = ",";
    @Autowired
    private MedicineRepository medicineRepository;


    private String getProductDoseFromRawName(String rawProductName) {
        String[] array = rawProductName.split(PRODUCT_DOSE_SEPARATOR);

        if(array.length != 3) {
            return null;
        }

        return array[2];
    }

    private String getProductName(String rawProductName) {
        String[] array = rawProductName.split(PRODUCT_DOSE_SEPARATOR);

        if(array.length == 0) {
            return null;
        }

        return array[0];
    }

    public MedicineDto findAlternatives(Long id) {
        Medicine medicine = medicineRepository.findOne(id);

        String productRawName = medicine.getName();

        if(productRawName == null || productRawName.isEmpty()) {
            return null;
        }

        String productDosage = getProductDoseFromRawName(productRawName);

        // get alternatives by substance name
        Substance substance = medicine.getSubstance();
        List<Medicine> alternatives = medicineRepository.findBySubstanceId(substance.getId());
        List<MedicineDto> medicineAlternativesDtos = new ArrayList<>();

        for(Medicine altMedicine: alternatives) {

            if(altMedicine.getId().equals(medicine.getId())) { // exclude parent medicine
                continue;
            }

            String altMedicineDose = getProductDoseFromRawName(altMedicine.getName());
            if(altMedicineDose != null && !altMedicineDose.equals(productDosage)) { // skip alt product if dose specified and NOT the same
                continue;
            }

            MedicineDto alternative = convertToMedicineDto(altMedicine);
            medicineAlternativesDtos.add(alternative);
        }

        MedicineDto dto = new MedicineDto();
        dto.setAnalogs(medicineAlternativesDtos);

        dto.setSubstance(convertToSubstanceDto(medicine.getSubstance()));

        dto.setName(medicine.getName());
        dto.setAtcCode(medicine.getAtcCode());
        dto.setId(medicine.getId());
        dto.setType(medicine.getType());

        List<Package> packages = medicine.getPackages();
        List<PackageDto> packageDtos = new ArrayList<>();

        for(Package pack : packages) {
            packageDtos.add(convertToPackageDto(pack));
        }
        dto.setPackages(packageDtos);

        return dto;

    }

    public List<MedicineShortDto> lookupMedicines(String name) {
        // query db and make result
        List<Medicine> medicineList = medicineRepository.findByNameIgnoreCaseContaining(name);

        if(name == null || name.isEmpty()) {
            return null;
        }

        if(medicineList == null || medicineList.isEmpty()) {
            return null;
        }

        List<MedicineShortDto> medicineShortDtos = new ArrayList<>();

        for(Medicine medicine : medicineList) {
            MedicineShortDto medicineShortDto = new MedicineShortDto();
            medicineShortDto.setId(medicine.getId());
            medicineShortDto.setName(medicine.getName());
            medicineShortDtos.add(medicineShortDto);
        }

        return medicineShortDtos;
    }

    private MedicineDto convertToMedicineDto(Medicine medicine) {
        MedicineDto dto = new MedicineDto();

        dto.setAtcCode(medicine.getAtcCode());
        dto.setId(medicine.getId());
        dto.setName(medicine.getName());

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
