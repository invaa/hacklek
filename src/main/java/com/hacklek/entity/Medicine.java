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
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "UUID", columnDefinition = "BINARY(16)")
    private UUID id;
    @Column(name="PRICE")
    private BigDecimal price;
}