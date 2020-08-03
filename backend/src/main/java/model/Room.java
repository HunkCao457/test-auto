package model;

import javax.persistence.*;

@Entity
@Table(name = "room")
public class Room {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    private RoomType type;

    @Column
    private String number;

}
