package com.bbx.practica.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PriceReductionDTO {

    private Long id_priceReduction;

    private int reducedPrice;

    private Date startDate;

    private Date endDate;

}
