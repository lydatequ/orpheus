/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.websystique.springsecurity.dao;

import com.websystique.springsecurity.model.Course;
import java.util.List;


public interface CourseDao {
    
        Course findById(int id);

	void saveCourse(Course course);
	
	public void saveOrUpdate(Course course);
	
	void deleteCourseById(int id);
	
	List<Course> findAllCourses();

	Course findCourseById(int id);
    
}
