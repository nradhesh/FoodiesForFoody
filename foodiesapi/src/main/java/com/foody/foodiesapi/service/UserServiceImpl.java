package com.foody.foodiesapi.service;
import com.foody.foodiesapi.entity.UserEntity;
import com.foody.foodiesapi.io.UserRequest;
import com.foody.foodiesapi.io.UserResponse;
import com.foody.foodiesapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    @Override
    public UserResponse registerUser(UserRequest request) {
        // Implementation will go here
    }
    private UserEntity convertToEntity(UserRequest request) {
        // Implementation will go here
    }
}