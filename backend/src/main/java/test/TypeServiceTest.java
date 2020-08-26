package test;

import model.Room;
import model.RoomType;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import service.TypeService;

public class TypeServiceTest {

    @Autowired
    private TypeService typeService;

    @Test
    public void testAddType() {
        RoomType type = new RoomType("master");
        RoomType type1 = typeService.saveRoomType(type);
        System.out.println(type);
    }
}
