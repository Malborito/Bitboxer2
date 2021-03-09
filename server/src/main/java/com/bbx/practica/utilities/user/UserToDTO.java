package com.bbx.practica.utilities.user;

import com.bbx.practica.dto.ItemDTO;
import com.bbx.practica.dto.UserDTO;
import com.bbx.practica.model.User;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;

public class UserToDTO implements Converter<User, UserDTO> {

    @Override
    public UserDTO convert(User user) {

        ModelMapper modelMapper = new ModelMapper();
        UserDTO result = new UserDTO();
        modelMapper.map(user, result);

        return result;
    }
}
