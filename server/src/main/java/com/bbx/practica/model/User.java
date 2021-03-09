package com.bbx.practica.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table (name = "user")
@Data

public class User {

    @Id
    @Column (name = "id_user")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user;

    @Column (name = "username")
    private String username;

    @Column (name = "password")
    private String   password;

    @Column (name = "enabled")
    private boolean enabled;

    @Column (name = "admin")
    private boolean admin;

}
