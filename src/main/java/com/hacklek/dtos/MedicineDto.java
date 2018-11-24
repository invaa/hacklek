package com.hacklek.dtos;

import lombok.Getter;
import lombok.Setter;

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

}
