package com.clonePopbill.www;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController {
	
	
	@RequestMapping(value="/")
	public void home () {
		System.out.println("hii");
	}

}
