/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.websystique.springsecurity.dao;

import com.websystique.springsecurity.model.Course;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

@Repository("courseDao")
public class CourseDaoImpl extends AbstractDao<Integer,Course> implements CourseDao {
    
       public Course findById(int id) {
		return getByKey(id);
	}

	public void saveCourse(Course course) {
		persist(course);
	}
	
	public void saveOrUpdate(Course course){
		super.saveOrUpdate(course);
	}
	
	public void deleteCourseById(int id) {
		Query query = getSession().createSQLQuery("delete from app_courses where id = :id");
		query.setInteger("id", id);
		query.executeUpdate();
	}

	@SuppressWarnings("unchecked")
	public List<Course> findAllCourses() {
		Criteria criteria = createEntityCriteria();
                
		return (List<Course>) criteria.list();
	}

	public Course findCourseById(int id) {
		Criteria criteria = createEntityCriteria();
		criteria.add(Restrictions.eq("id",id));
		return (Course) criteria.uniqueResult();
	}
    
    
}
