package com.bbx.practica.utilities.supplier;

import com.bbx.practica.dto.SupplierDTO;
import com.bbx.practica.model.Supplier;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.core.convert.converter.Converter;

public class SupplierToDTO implements Converter<Supplier, SupplierDTO> {

    @Override
    public SupplierDTO convert(Supplier supplier) {

        ModelMapper modelMapper = new ModelMapper();
        SupplierDTO result = new SupplierDTO();
        modelMapper.map(supplier, result);

        return result;
    }
}
