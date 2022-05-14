package com.clonePopbill.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public void login ( @RequestParam String id, @RequestParam String pw) {
		System.out.println(id);
		System.out.println(pw);
	}

}
