package com.bbx.practica.utilities.pricereduction;

import com.bbx.practica.dto.ItemDTO;
import com.bbx.practica.dto.PriceReductionDTO;
import com.bbx.practica.model.PriceReduction;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;

public class PriceReductionToDTO implements Converter<PriceReduction, PriceReductionDTO> {

    @Override
    public PriceReductionDTO convert(PriceReduction priceReduction) {

        ModelMapper modelMapper = new ModelMapper();
        PriceReductionDTO result = new PriceReductionDTO();
        modelMapper.map(priceReduction, result);

        return result;
    }
}
