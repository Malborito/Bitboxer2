package com.bbx.practica.model;

import com.bbx.practica.globaldata.StateEnum;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name="item")

@Data
public class Item {

    @Id
    @Column (name= "id_item")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id_item;

    @Column (name= "item_code", unique = true)
        private Long code_product;

    @Column (name = "description")
        private String description;

    @Column (name = "price")
        private Double price;

    @Column (name = "state")
        private StateEnum state;

    @ManyToMany
    @JoinTable(
        name = "item_supplier",
        joinColumns = { @JoinColumn(name = "item_id") },
        inverseJoinColumns = { @JoinColumn(name = "supplier_id") },
        indexes = {
            @Index(name = "item_supplier_unique", columnList = "item_id, supplier_id", unique = true)
        }
    )
        private List<Supplier> suppliers;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "item")
        private List<PriceReduction> priceReductions;

    @Column (name = "creation")
        private LocalDate creation;

    @Column(name="creator")
        private String creator;

    @Override
    public String toString() {
        return "Item{" +
                "id_item=" + id_item +
                ", code_product=" + code_product +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", state=" + state +
                ", creation=" + creation +
                ", creator='" + creator + '\'' +
                '}';
    }
}
