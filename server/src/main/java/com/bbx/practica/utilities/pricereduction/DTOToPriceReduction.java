package com.bbx.practica.utilities.pricereduction;

import com.bbx.practica.dto.PriceReductionDTO;
import com.bbx.practica.model.Item;
import com.bbx.practica.model.PriceReduction;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;

public class DTOToPriceReduction implements Converter<PriceReductionDTO, PriceReduction> {

    @Override
    public PriceReduction convert(PriceReductionDTO priceReductionDTO) {

        ModelMapper modelMapper = new ModelMapper();
        PriceReduction result = new PriceReduction();
        modelMapper.map(priceReductionDTO, result);

        return result;
    }
}
