package com.bbx.practica.services.userService;

import com.bbx.practica.dto.UserDTO;
import com.bbx.practica.model.User;
import com.bbx.practica.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    ConversionService conversionService;

    @Override
    public List<UserDTO> listUsers() {
        return userRepository.findAll().stream().map(user -> conversionService.convert(user, UserDTO.class)).collect(Collectors.toList());
    }

    @Transactional
    public UserDTO createUser(UserDTO userDTO) throws Exception {
        return conversionService.convert(userRepository.save(conversionService.convert(userDTO, User.class)), UserDTO.class);
    }

    @Transactional
    public Boolean deleteUser(Long user_id) throws Exception {
         var item = userRepository.findById(user_id);
         if (item.isPresent()){
             userRepository.delete(item.get());
             return true;
         }
         return false;
    }

    @Override
    public UserDTO getItemById(Long idUser) {
        return null;
    }

}
