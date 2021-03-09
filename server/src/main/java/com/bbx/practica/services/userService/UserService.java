package com.bbx.practica.services.userService;

import com.bbx.practica.dto.UserDTO;

import java.util.List;

public interface UserService {

    public List<UserDTO> listUsers();

    public UserDTO getItemById(Long idUser);

    public UserDTO createUser(UserDTO userDTO) throws Exception;

    public Boolean deleteUser(Long user_id) throws Exception;

}
