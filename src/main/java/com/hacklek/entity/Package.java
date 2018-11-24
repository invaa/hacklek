package com.hacklek.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "PACKAGE")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Package implements Serializable {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="NAME")
    private String name;

    @Column(name="PRICE")
    private BigDecimal price;

    @Column(name="REFUND")
    private BigDecimal refundPrice;
}