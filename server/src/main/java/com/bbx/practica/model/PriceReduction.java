package com.bbx.practica.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table (name = "pricereduction")
@Data

public class PriceReduction {

    @Id
    @Column(name = "id_pricereduction")
    @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id_priceReduction;

    @Column (name = "reducedPrice")
        private int reducedPrice;

    @Column (name = "startDate")
        private Date startDate;

    @Column (name = "endDate")
        private Date endDate;

    @ManyToOne
    @JoinColumn(name = "id_item")
    private Item item;
}
