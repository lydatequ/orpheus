/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.websystique.springsecurity.service;

import com.websystique.springsecurity.model.Course;
import java.util.List;

/**
 *
 * @author Μίνα
 */
public interface CourseService {
    
        Course findById(int id);
	
	void saveCourse(Course course);
	
	void updateCourse(Course course);
	
	void deleteCourseById(int id);

	List<Course> findAllCourses(); 
	
	Course findCourseById(int id);
    
}
