# SEPT2020
Online booking system

How to get application running:
- frontend: cd to frontend folder
            npm install
            npm start
            access frontend web at localhost:9000
- backend: open AppConfig.java backend\src\main\java\config
           type in your postgresql password into this line: dataSource.setPassword("<postgresql password>");
           cd to backend folder
           mvn clean install
           mvn jetty:run
           open pgAdmin 4
           access APIs at: localhost:8080/rooms/all
                           localhost:8080/roomtypes/all
                           localhost:8080/bookings/all
                           localhost:8080/customeraccounts/all

Current functionality:
- Create an account (No login authentication yet)
- Display list of available rooms
- Allow users to book rooms
- Allow CRUD on rooms, room types, bookings, customer accounts using Postman

API routes:
  url = 'localhost:8080'
  - roomtypes: 
    Get all room types (GET):   url + '/roomtypes/all'
    Get room type by ID (GET):  url + '/roomtypes/{id}'
    Delete room type (DELETE):  url + '/roomtypes/{id}'
    Add room type (POST):       url + '/roomtypes'
    Update room type (PUT):     url + '/roomtypes'
    
  - rooms:
    Get all rooms (GET):        url + '/rooms/all'
    Get room by ID (GET):       url + '/rooms/{id}'
    Get rooms by type (GET):    url + '/rooms/type/{id}'
    Delete room type (DELETE):  url + '/rooms/{id}'
    Add room (POST):            url + '/rooms'
    Update room (PUT):          url + '/rooms'
    
  - bookings:
    Get all bookings (GET):   url + '/bookings/all'
    Get booking by ID (GET):  url + '/bookings/{id}'
    Delete booking (DELETE):  url + '/bookings/{id}'
    Add booking (POST):       url + '/bookings'
    Update booking (PUT):     url + '/bookings'
    
  - customeraccounts:
    Get all customer accounts (GET):   url + '/customeraccounts/all'
    Get customer account by ID (GET):  url + '/customeraccounts/{id}'
    Delete customer account (DELETE):  url + '/customeraccounts/{id}'
    Add customer account (POST):       url + '/customeraccounts'
    Update customer account (PUT):     url + '/customeraccounts'
