package com.bbx.practica.utilities.supplier;

import com.bbx.practica.dto.SupplierDTO;
import com.bbx.practica.model.Supplier;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;

public class DTOToSupplier implements Converter<SupplierDTO, Supplier> {

    @Override
    public Supplier convert(SupplierDTO supplierDTO){

        ModelMapper modelMapper = new ModelMapper();
        Supplier result = new Supplier();
        modelMapper.map(supplierDTO, result);

        return result;
    }
}
