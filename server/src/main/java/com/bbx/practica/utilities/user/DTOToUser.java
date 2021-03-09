package com.bbx.practica.utilities.user;

import com.bbx.practica.dto.UserDTO;
import com.bbx.practica.model.User;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;

public class DTOToUser implements Converter<UserDTO, User> {
    @Override
    public User convert(UserDTO userDTO) {

        ModelMapper modelMapper = new ModelMapper();
        User result = new User();
        modelMapper.map(userDTO, result);

        return result;
    }

}
