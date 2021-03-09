package com.bbx.practica.utilities.item;

import com.bbx.practica.dto.ItemDTO;
import com.bbx.practica.model.Item;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;

public class DTOToItem implements Converter<ItemDTO, Item> {

    @Override
    public Item convert(ItemDTO itemDTO) {

        ModelMapper modelMapper = new ModelMapper();
        Item result = new Item();
        modelMapper.map(itemDTO, result);

        return result;
    }
}
