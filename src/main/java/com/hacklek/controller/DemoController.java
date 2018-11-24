package com.hacklek.controller;

import lombok.extern.log4j.Log4j;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

@EnableAutoConfiguration
@RestController
@RequestMapping("api/v1/")
@Log4j
public class DemoController {

//    @RequestMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
//    public ResponseEntity<Cart> createCart() {
//        final Cart newCart = cartRepository.save(new Cart());
//        log.info("Cart saved: " + newCart.getId());
//        return new ResponseEntity<>(newCart, HttpStatus.OK);
//    }
}
