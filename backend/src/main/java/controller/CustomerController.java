package controller;

import model.CustomerAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.CustomerService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/")
public class CustomerController {

    @Autowired
    private CustomerService customerService;
    
    @RequestMapping(path = "customeraccounts/all", method = RequestMethod.GET)
    public List<CustomerAccount> getAllCustomerAccounts() {
        return customerService.getAllCustomerAccounts();
    }

    @RequestMapping(path = "customeraccounts/{id}", method = RequestMethod.GET)
    public CustomerAccount getCustomerAccountByID(@PathVariable int id) {
        return customerService.getCustomerAccountByID(id);
    }

    @RequestMapping(path = "customeraccounts/{id}", method = RequestMethod.DELETE)
    public int deleteCustomerAccount(@PathVariable int id) {
        return customerService.deleteCustomerAccount(id);
    }

    @RequestMapping(path = "customeraccounts", method = RequestMethod.POST)
    public CustomerAccount saveCustomerAccount(@RequestBody CustomerAccount account) {
        return customerService.saveCustomerAccount(account);
    }

    @RequestMapping(path = "customeraccounts", method = RequestMethod.PUT)
    public CustomerAccount updateCustomerAccount(@RequestBody CustomerAccount account) {
        return customerService.updateCustomerAccount(account);
    }
}
