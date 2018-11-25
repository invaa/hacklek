package com.hacklek.dtos;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
public class MedicineDto {

    private Long id;

    private String type;

    private String atcCode;

    private String name;

    private List<PackageDto> packages;

    private List<MedicineDto> analogs;

    private SubstanceDto substance;

    private Boolean notForPregnant;

    private Boolean noAlcAllowed;

    private BigDecimal price;

}
