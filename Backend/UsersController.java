package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Users;
import com.model.UsersDAO;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UsersController {
	@Autowired
	UsersDAO usersDAO;
	@PostMapping("/addusers")
	public Users addUsers(@RequestBody Users c) {
		return usersDAO.save(c);
		
	}
	
	@DeleteMapping("/deleteusers/{id}")
	public String deleteUsers(@PathVariable int id) {
		usersDAO.deleteById(id);
		return "form cancelled.";
	}
	
	@PatchMapping("/modifyusers")
	public String modifyUsers(@RequestBody Users f) {
		usersDAO.save(f);
		return "form modified";
	}
	@GetMapping("/userslist")
	public Iterable<Users> getUsers() {
		return  usersDAO.findAll();
	}
	
}
