/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.websystique.springsecurity.service;

import com.websystique.springsecurity.model.UserProfile;
import java.util.List;

/**
 *
 * @author ����
 */
public interface UserProfileService {
        UserProfile findById(int id);

	UserProfile findByType(String type);
	
	List<UserProfile> findAll();
    
}
