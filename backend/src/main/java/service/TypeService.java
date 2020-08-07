package service;

import model.RoomType;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class TypeService {

    @Autowired
    private SessionFactory sessionFactory;

    public RoomType saveRoomType(RoomType type) {
        sessionFactory.getCurrentSession().save(type);
        return type;
    }

    public RoomType updateRoomType(RoomType type) {
        sessionFactory.getCurrentSession().update(type);
        return type;
    }

    public int deleteRoomType(int id) {
        RoomType type = getRoomTypeByID(id);
        sessionFactory.getCurrentSession().delete(type);
        return id;
    }

    public List<RoomType> getAllRoomTypes() {
        Query query = sessionFactory.getCurrentSession().createQuery("from RoomType");
        return query.list();
    }

    public RoomType getRoomTypeByID(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from RoomType where id=:id");
        query.setInteger("id", id);
        return (RoomType) query.uniqueResult();
    }
}
