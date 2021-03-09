package com.bbx.practica.controller;

import com.bbx.practica.dto.UserDTO;
import com.bbx.practica.services.userService.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/shop")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<UserDTO> getUsers() {
        return userService.listUsers();
    }

    @PostMapping("/user")
    public ResponseEntity createUser(@RequestBody UserDTO userDTO){
        try {
            UserDTO result = userService.createUser(userDTO);
            return new ResponseEntity<UserDTO>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<UserDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/user/{user_id}")
    public ResponseEntity deleteUser(@PathVariable Long user_id){
        try{
            return (userService.deleteUser(user_id))? new ResponseEntity(HttpStatus.OK) : new ResponseEntity(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
