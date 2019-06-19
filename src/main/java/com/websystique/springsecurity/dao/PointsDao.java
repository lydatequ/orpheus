package com.websystique.springsecurity.dao;

import com.websystique.springsecurity.model.Points;
/**
 *
 * @author Lyda
 */
public interface PointsDao {
    
    Points findById(int id);
	
    void savePoints(Points points);
	
    void deletePointsById(int id);
    
    Points editPointsById(int id);
    
     
}

