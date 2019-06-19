/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.websystique.springsecurity.service;

import com.websystique.springsecurity.dao.CourseDao;
import com.websystique.springsecurity.model.Course;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Μίνα
 */
@Service("courseService")
@Transactional
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao dao;
	
	public Course findById(int id) {
		return dao.findById(id);
	}

	public void saveCourse(Course course) {
		dao.saveCourse(course);
	}
	
	public void updateCourse(Course course) {
		Course entity = dao.findById(course.getId());
		if(entity!=null){
			entity.setInstrument(course.getInstrument());
			entity.setCourseLevel(course.getCourseLevel());
			
			//dao.saveOrUpdate(course);
		}
	}

	public void deleteCourseById(int id) {
		dao.deleteCourseById(id);
	}
	
	public List<Course> findAllCourses() {
		return dao.findAllCourses();
	}

	public Course findCourseById(int id) {
		return dao.findCourseById(id);
	}

	
    
    
}
