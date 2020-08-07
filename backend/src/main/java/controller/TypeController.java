package controller;

import model.RoomType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.TypeService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/")
public class TypeController {

    @Autowired
    private TypeService typeService;
    
    @RequestMapping(path = "roomtypes/all", method = RequestMethod.GET)
    public List<RoomType> getAllRoomTypes() {
        return typeService.getAllRoomTypes();
    }

    @RequestMapping(path = "roomtypes/{id}", method = RequestMethod.GET)
    public RoomType getRoomTypeByID(@PathVariable int id) {
        return typeService.getRoomTypeByID(id);
    }

    @RequestMapping(path = "roomtypes/{id}", method = RequestMethod.DELETE)
    public int deleteRoomType(@PathVariable int id) {
        return typeService.deleteRoomType(id);
    }

    @RequestMapping(path = "roomtypes", method = RequestMethod.POST)
    public RoomType saveRoomType(@RequestBody RoomType type) {
        return typeService.saveRoomType(type);
    }

    @RequestMapping(path = "roomtypes", method = RequestMethod.PUT)
    public RoomType updateRoomType(@RequestBody RoomType type) {
        return typeService.updateRoomType(type);
    }
}
