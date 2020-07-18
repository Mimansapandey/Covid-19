package com.self.RatingsWeProvide.Validator;

import com.self.RatingsWeProvide.Model.User;

public class UserLoginValidator {

	public static void validate(User user) throws Exception {
		
		if(!validatePassword(user.getPassword())) throw new Exception("Password does not meet expectations");
		
		if(!validatePhoneNo(user.getPhoneNo())) throw new Exception("Phone no. is not in correct format");
	}

	private static boolean validatePhoneNo(long phoneNo) {
		String phNo = String.valueOf(phoneNo);
		if(phNo.length()!=10) return false;
		return true;
	}

	
	private static boolean validatePassword(String password) {
		if(password.matches(".*[A-Z].*")) {
			if(password.matches(".*[a-z].*")) {
				if(password.matches(".*[1-9].*")) {
					return true;
				}
					
			}
		}
		return false;
	}

	private static boolean vaidateName(String userName)   {
		if(userName.split(" ").length < 2) return false;
		 return true;
		
	}
}
