package com.hacklek.dtos;

import java.math.BigDecimal;
import java.util.List;

public class MedicineDto {

    private Long id;

    private String type;

    private String atcCode;

    private String name;

    private BigDecimal price;

    private List<PackageDto> packages;

    private List<MedicineDto> analogs;

    private List<SubstanceDto> substances;

    public List<SubstanceDto> getSubstances() {
        return substances;
    }

    public void setSubstances(List<SubstanceDto> substances) {
        this.substances = substances;
    }

    public List<MedicineDto> getAnalogs() {
        return analogs;
    }

    public void setAnalogs(List<MedicineDto> analogs) {
        this.analogs = analogs;
    }

    public List<PackageDto> getPackages() {
        return packages;
    }

    public void setPackages(List<PackageDto> packages) {
        this.packages = packages;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAtcCode() {
        return atcCode;
    }

    public void setAtcCode(String atcCode) {
        this.atcCode = atcCode;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
