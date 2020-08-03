package service;

import model.Room;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class RoomService {

    @Autowired
    private SessionFactory sessionFactory;

    public Room saveRoom(Room room) {
        sessionFactory.getCurrentSession().save(room);
        return room;
    }

    public Room updateRoom(Room room) {
        sessionFactory.getCurrentSession().update(room);
        return room;
    }

    public int deleteRoom(int id) {
        Room room = getRoomByID(id);
        sessionFactory.getCurrentSession().delete(room);
        return id;
    }

    public List<Room> getAllRooms() {
        Query query = sessionFactory.getCurrentSession().createQuery("from Room");
        return query.list();
    }

    public Room getRoomByID(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Room where id=:id");
        query.setInteger("id", id);
        return (Room) query.uniqueResult();
    }
}
