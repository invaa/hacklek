package com.hacklek.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "MEDICINE")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Medicine implements Serializable {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="EAN")
    private String ean;

    @Column(name="TYPE")
    private String type;

    @Column(name="NAME")
    private String name;

    @OneToOne(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name="SUBSTANCE_ID")
    private Substance substance;

    @Column(name="PRICE")
    private BigDecimal price;
}