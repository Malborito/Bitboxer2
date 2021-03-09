package com.bbx.practica.services.itemService;

import com.bbx.practica.dto.ItemDTO;
import com.bbx.practica.dto.PriceReductionDTO;
import com.bbx.practica.model.Item;
import com.bbx.practica.model.PriceReduction;
import com.bbx.practica.repository.ItemRepository;
import com.bbx.practica.repository.PriceReductionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private PriceReductionRepository priceReductionRepository;

    @Autowired
    private ConversionService conversionService;

    public List<ItemDTO> listItems() {
        List<ItemDTO> items = itemRepository.findAll().stream()
                .map(item -> conversionService.convert(item, ItemDTO.class))
                .collect(Collectors.toList());

        return items;
    }

    public ItemDTO getItemById(Long idItem){
        var item = itemRepository.findById(idItem);
        return (item.isPresent())? conversionService.convert(item.get(), ItemDTO.class) : null;
    };

    @Transactional
    public ItemDTO newItem(ItemDTO itemDTO) throws Exception{

        Item item = conversionService.convert(itemDTO, Item.class);
        itemRepository.save(item);

        for (PriceReduction pr : item.getPriceReductions()){
            pr.setItem(item);
            priceReductionRepository.save(pr);
        }

        return conversionService.convert(item, ItemDTO.class);
    };

    @Transactional
    public ItemDTO updateItem(ItemDTO itemDTO) throws Exception{
        var item= itemRepository.findById(itemDTO.getId_item());
        if (item.isPresent()){
            Item itemUpdated = item.get();
            itemUpdated.setDescription(itemDTO.getDescription());
            itemUpdated.setPrice(itemDTO.getPrice());
            itemUpdated.setState(itemDTO.getState());
            itemUpdated.setCreator(itemDTO.getCreator());

            itemUpdated.setPriceReductions(itemDTO.getPriceReductions().stream()
                    .map(priceReductionDTO -> conversionService.convert(priceReductionDTO, PriceReduction.class))
                    .collect(Collectors.toList()));

            for (PriceReduction priceReduction : itemUpdated.getPriceReductions()){
                priceReduction.setItem(itemUpdated);
            }
            priceReductionRepository.saveAll(itemUpdated.getPriceReductions());

            return conversionService.convert(itemRepository.save(itemUpdated),ItemDTO.class);
        } else {
            return null;
        }
    }
}
