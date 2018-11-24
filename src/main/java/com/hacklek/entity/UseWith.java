package com.hacklek.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "USE_WITH")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UseWith implements Serializable {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "WHAT_ID")
    private Long whatId;

    @Column(name = "WITH_ID")
    private Long withId;
}