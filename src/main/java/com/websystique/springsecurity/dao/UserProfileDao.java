/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.websystique.springsecurity.dao;

import com.websystique.springsecurity.model.UserProfile;
import java.util.List;

/**
 *
 * @author Μίνα
 */
public interface UserProfileDao {
        List<UserProfile> findAll();
	
	UserProfile findByType(String type);
	
	UserProfile findById(int id);
    
}
