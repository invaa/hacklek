package com.hacklek.dtos;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class PackageDto {

    private Long id;

    private String ean;

    private String name;

    private BigDecimal price;

    private BigDecimal refundPrice;

}
