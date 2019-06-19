package com.websystique.springsecurity.service;

import com.websystique.springsecurity.model.User;
import java.util.List;

public interface UserService {

	User findById(int id);
	
	User findBySso(String sso);
        
        void saveUser(User user);
	
	void updateUser(User user);
	
	void deleteUserBySSO(String sso);

	List<User> findAllUsers(); 
	
	boolean isUserSSOUnique(Integer id, String sso);
	
}