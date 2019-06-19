
package com.websystique.springsecurity.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


    
    @Entity
    @Table(name="app_courses")
    public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @NotNull
    @Size(min=3, max=45)
    @Column(name="instrument", nullable = false)
    private String instrument;
    
    @NotNull
    @Size(min=3, max=30)
    @Column(name="course_level", nullable = false)
    private String courseLevel;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getInstrument() {
        return instrument;
    }

    public void setInstrument(String instrument) {
        this.instrument = instrument;
    }

    public String getCourseLevel() {
        return courseLevel;
    }

    public void setCourseLevel(String courseLevel) {
        this.courseLevel = courseLevel;
    }

    @Override
    public String toString() {
        return "Course{" + "id=" + id + ", instrument=" + instrument + ", courseLevel=" + courseLevel + '}';
    }
    
        
    

    
}
