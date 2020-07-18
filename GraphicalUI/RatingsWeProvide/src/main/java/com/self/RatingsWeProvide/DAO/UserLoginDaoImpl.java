package com.self.RatingsWeProvide.DAO;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.provider.HibernateUtils;
import org.springframework.stereotype.Repository;

import com.self.RatingsWeProvide.Entity.UserEntity;
import com.self.RatingsWeProvide.Model.User;

@Repository
public class UserLoginDaoImpl implements UserLoginDao {

	@Autowired
	SessionFactory sessionFactory; 
	
	@Override
	public long registerUser(User user) {
		
		System.out.println("4");
		Session session= sessionFactory.getCurrentSession();
		System.out.println("5");
		UserEntity userEntity=new UserEntity();
		userEntity.setPhoneNo(user.getPhoneNo());
		userEntity.setPassword(user.getPassword());
		long userId = (long) session.save(userEntity);
		System.out.println("6");
		return userId;
	}

	@Override
	public User getUser(long phoneNumber) {

		Session session = sessionFactory.getCurrentSession(); 
		UserEntity userEntity=(UserEntity)session.get(UserEntity.class,phoneNumber);

		User user = new User();

		if(userEntity!=null) 
		{
		
		user.setPassword(userEntity.getPassword());
		user.setPhoneNo(userEntity.getPhoneNo()); 
		
		}
		else user.setErrorMessage("Entity is null");
		return user;
	}

}
