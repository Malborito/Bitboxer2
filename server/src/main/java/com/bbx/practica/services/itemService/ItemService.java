package com.bbx.practica.services.itemService;

import com.bbx.practica.dto.ItemDTO;

import java.util.ArrayList;
import java.util.List;

public interface ItemService {

    public List<ItemDTO> listItems();

    public ItemDTO getItemById(Long idItem);

    public ItemDTO newItem(ItemDTO itemDTO) throws Exception;

    public ItemDTO updateItem(ItemDTO itemDTO) throws Exception;
}
