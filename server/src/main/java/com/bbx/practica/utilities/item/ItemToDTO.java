package com.bbx.practica.utilities.item;

import com.bbx.practica.dto.ItemDTO;
import com.bbx.practica.model.Item;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;


public class ItemToDTO implements Converter<Item, ItemDTO> {

    @Override
    public ItemDTO convert(Item item) {

        ModelMapper modelMapper = new ModelMapper();
        ItemDTO result = new ItemDTO();
        modelMapper.map(item, result);

        return result;
    }
}
