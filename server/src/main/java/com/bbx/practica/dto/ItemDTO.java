package com.bbx.practica.dto;

import com.bbx.practica.globaldata.StateEnum;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class ItemDTO {

    private Long id_item;

    private Long code_product;

    private String description;

    private Double price;

    private StateEnum state;

    private List<SupplierDTO> suppliers;

    private List<PriceReductionDTO> priceReductions;

    private LocalDate creation;

    private String creator;
}
