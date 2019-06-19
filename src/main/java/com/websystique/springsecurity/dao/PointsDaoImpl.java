package com.websystique.springsecurity.dao;

import com.websystique.springsecurity.model.Points;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Lyda
 */
@Repository("pointsDao")
public class PointsDaoImpl extends AbstractDao<Integer, Points> implements PointsDao {
    
    @Override
    public Points findById(int id) {
        return getByKey(id);
    }
    
    @Override
    public void savePoints(Points points) {
        persist(points);
    }
    
    public void updateCourse (Points points){
        super.saveOrUpdate(points);
    }
    
    @Override
    public void deletePointsById(int id){
        Criteria crit = createEntityCriteria();
        crit.add(Restrictions.eq("Id", id));
        Points points = (Points) crit.uniqueResult();
        delete(points);
    }
    
    @Override
    public Points editPointsById(int id) {
        Criteria criteria = createEntityCriteria();
        criteria.add(Restrictions.eq("id", id));
        return(Points) criteria.uniqueResult();
    }

}
