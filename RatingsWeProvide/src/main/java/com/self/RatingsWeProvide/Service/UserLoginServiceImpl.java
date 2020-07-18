package com.self.RatingsWeProvide.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.self.RatingsWeProvide.DAO.UserLoginDao;
import com.self.RatingsWeProvide.Model.User;
import com.self.RatingsWeProvide.Validator.UserLoginValidator;

@Service
@Transactional(readOnly = true)
public class UserLoginServiceImpl implements UserLoginService{
	
	@Autowired
	UserLoginDao userLoginDao;
	
	@Transactional(readOnly = false,propagation = Propagation.REQUIRES_NEW)
	public long register(User user) throws Exception  {
		System.out.println("2");
		UserLoginValidator.validate(user);
		System.out.println("3");
		return userLoginDao.registerUser(user);
	}
         	
	@Transactional(readOnly = false,propagation = Propagation.REQUIRES_NEW)
	public User getUser(long phoneNumber) {
		User user=userLoginDao.getUser(phoneNumber);
		return user;
	}

}
