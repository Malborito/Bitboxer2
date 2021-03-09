package com.bbx.practica.controller;

import com.bbx.practica.dto.ItemDTO;
import com.bbx.practica.services.itemService.ItemServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/shop")
public class ItemController {

    @Autowired
    private ItemServiceImpl itemService;

    @GetMapping("/items")
    public List<ItemDTO> getItems() {
        return itemService.listItems();
    }

    @GetMapping("/item/{idItem}")
    public ResponseEntity<ItemDTO> getItemById(@PathVariable Long idItem) {
        ItemDTO result = itemService.getItemById(idItem);
        if (result != null) {
            return new ResponseEntity<ItemDTO>(result, HttpStatus.OK);
        } else
            return new ResponseEntity<ItemDTO>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/item")
    public ResponseEntity<ItemDTO> newItem(@RequestBody ItemDTO itemDTO) {
        try {
            ItemDTO result = itemService.newItem(itemDTO);
            return new ResponseEntity<ItemDTO>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<ItemDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PutMapping("/item")
    public ResponseEntity<ItemDTO> updateItem(@RequestBody ItemDTO itemDTO) {
        try {
            ItemDTO result = itemService.updateItem(itemDTO);
            return new ResponseEntity<ItemDTO>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<ItemDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


//    @DeleteMapping("/item/{idItem}")
//    public boolean deleteItem(){
//
//    }
}
