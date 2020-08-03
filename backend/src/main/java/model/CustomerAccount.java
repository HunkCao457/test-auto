package model;

import javax.persistence.*;

@Entity
@Table(name = "customeraccount")
public class CustomerAccount {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;


}
