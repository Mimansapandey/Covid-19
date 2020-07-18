package com.self.RatingsWeProvide.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.self.RatingsWeProvide.Model.User;
import com.self.RatingsWeProvide.Service.UserLoginService;

@CrossOrigin
@RestController
@RequestMapping(value="UserLogin")
public class UserLoginApiImpl implements UserLoginApi {

	@Autowired
	UserLoginService userLoginService; 
	
	@RequestMapping(value="/Register",method = RequestMethod.POST)
	public ResponseEntity<User> register(@RequestBody User user) {
		try {
			
			userLoginService.register(user);
			System.out.println("7");
			user.setErrorMessage("");
			ResponseEntity<User> re = new ResponseEntity<User>(user, HttpStatus.OK);

			return re;
			
		} catch (Exception e) {
			System.out.println("10");
			User user1=new User();
			user1.setErrorMessage(e.getMessage());
			ResponseEntity<User> re = new ResponseEntity<User>(user1, HttpStatus.BAD_REQUEST);
			return re;
		}
	}
	
	@RequestMapping(value="getUser/{phoneNumber}")
	public User getUser(@PathVariable long phoneNumber) {
		try {
			
			User user=userLoginService.getUser(phoneNumber);
			return user;
			
		} catch (Exception e) {
			User user1=new User();
			user1.setErrorMessage(e.getMessage());
			return user1;
		}
	}
	
}
