package com.bbx.practica.dto;

import lombok.Data;

import java.util.List;

@Data
public class UserDTO {

    private Long id_user;

    private String username;

    private String password;

    private boolean enabled;

    private boolean admin;

}
