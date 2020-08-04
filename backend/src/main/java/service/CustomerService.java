package service;

import model.CustomerAccount;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class CustomerService {

    @Autowired
    private SessionFactory sessionFactory;

    public CustomerAccount saveCustomerAccount(CustomerAccount account) {
        sessionFactory.getCurrentSession().save(account);
        return account;
    }

    public CustomerAccount updateCustomerAccount(CustomerAccount account) {
        sessionFactory.getCurrentSession().update(account);
        return account;
    }

    public int deleteCustomerAccount(int id) {
        CustomerAccount account = getCustomerAccountByID(id);
        sessionFactory.getCurrentSession().delete(account);
        return id;
    }

    public List<CustomerAccount> getAllCustomerAccounts() {
        Query query = sessionFactory.getCurrentSession().createQuery("from CustomerAccount");
        return query.list();
    }

    public CustomerAccount getCustomerAccountByID(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from CustomerAccount where id=:id");
        query.setInteger("id", id);
        return (CustomerAccount) query.uniqueResult();
    }

}
