package service;

import model.Booking;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class BookingService {

    @Autowired
    private SessionFactory sessionFactory;

    public Booking saveBooking(Booking booking) {
        sessionFactory.getCurrentSession().save(booking);
        return booking;
    }

    public Booking updateBooking(Booking booking) {
        sessionFactory.getCurrentSession().update(booking);
        return booking;
    }

    public int deleteBooking(int id) {
        Booking booking = getBookingByID(id);
        sessionFactory.getCurrentSession().delete(booking);
        return id;
    }

    public List<Booking> getAllBookings() {
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking");
        return query.list();
    }

    public Booking getBookingByID(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking where id=:id");
        query.setInteger("id", id);
        return (Booking) query.uniqueResult();
    }

    public List<Booking> getBookingByPhone(String phone) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking b where b.phone like :phone");
        query.setString("phone", "%"+phone+"%");
        return query.list();
    }

    public List<Booking> getBookingByName(String name) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking b where b.name like :name");
        query.setString("name", "%"+name+"%");
        return query.list();
    }

    public List<Booking> getBookingByEmail(String email) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking b where b.email like :email");
        query.setString("email", "%"+email+"%");
        return query.list();
    }
}
