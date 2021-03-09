package com.bbx.practica.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table (name = "supplier")
@Data

public class Supplier {

    @Id
    @Column (name = "id_supplier")
    @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id_supplier;

    @Column (name = "name")
        private String name;

    @Column (name = "country")
        private String country;

    @ManyToMany (mappedBy = "suppliers")
        private List<Item> items;

}
