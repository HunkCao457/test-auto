package controller;

import model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.BookingService;

import java.util.List;

@RestController
@RequestMapping(path = "/")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @RequestMapping(path = "bookings/all", method = RequestMethod.GET)
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @RequestMapping(path = "bookings/{id}", method = RequestMethod.GET)
    public Booking getBookingByID(@PathVariable int id) {
        return bookingService.getBookingByID(id);
    }

    @RequestMapping(path = "bookings/{id}", method = RequestMethod.DELETE)
    public int deleteBooking(@PathVariable int id) {
        return bookingService.deleteBooking(id);
    }

    @RequestMapping(path = "bookings", method = RequestMethod.POST)
    public Booking saveBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }

    @RequestMapping(path = "bookings", method = RequestMethod.PUT)
    public Booking updateBooking(@RequestBody Booking booking) {
        return bookingService.updateBooking(booking);
    }

    @RequestMapping(path = "bookings/name", method = RequestMethod.GET)
    public List<Booking> getBooking(@RequestParam(required = false) String s){
        return bookingService.getBookingByName(s);
    }

    @RequestMapping(path = "bookings/phone", method = RequestMethod.GET)
    public List<Booking> getBookingByPhone(@RequestParam(required = false) String s){
        return bookingService.getBookingByPhone(s);
    }

    @RequestMapping(path = "bookings/email", method = RequestMethod.GET)
    public List<Booking> getBookingByEmail(@RequestParam(required = false) String s){
        return bookingService.getBookingByEmail(s);
    }
}
