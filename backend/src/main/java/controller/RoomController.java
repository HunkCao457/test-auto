package controller;

import model.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.RoomService;

import java.util.List;

@RestController
@RequestMapping(path = "/")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @RequestMapping(path = "rooms/all", method = RequestMethod.GET)
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }

    @RequestMapping(path = "rooms/{id}", method = RequestMethod.GET)
    public Room getRoomByID(@PathVariable int id) {
        return roomService.getRoomByID(id);
    }

    @RequestMapping(path = "rooms/{id}", method = RequestMethod.DELETE)
    public int deleteRoom(@PathVariable int id) {
        return roomService.deleteRoom(id);
    }

    @RequestMapping(path = "rooms", method = RequestMethod.POST)
    public Room saveRoom(@RequestBody Room room) {
        return roomService.saveRoom(room);
    }

    @RequestMapping(path = "rooms", method = RequestMethod.PUT)
    public Room updateRoom(@RequestBody Room room) {
        return roomService.updateRoom(room);
    }
}
