package com.hacklek.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
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

    @Column(name="TYPE")
    private String type;

    @Column(name="ATC_CODE")
    private String atcCode;

    @Column(name="NAME")
    private String name;

    @OneToOne(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name="SUBSTANCE_ID")
    private Substance substance;

    @OneToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name="MEDICINE_ID")
    private List<Package> packages;

    @OneToOne(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    @JoinColumn(name="DEFAULT_PACKAGE")
    private Package defaultPackage;
}