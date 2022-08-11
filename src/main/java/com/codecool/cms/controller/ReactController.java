package com.codecool.cms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ReactController {

    @RequestMapping( method = {RequestMethod.OPTIONS, RequestMethod.GET}, path = {"/reservation", "/cart", "/checkout","/"} )
    public String forwardReactPaths() {
        return "forward:/index.html";
    }
}
