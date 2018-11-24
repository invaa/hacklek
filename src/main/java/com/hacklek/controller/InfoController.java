package com.hacklek.controller;

import lombok.extern.log4j.Log4j;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@EnableAutoConfiguration
@RestController
@RequestMapping("api/v1/")
@Log4j
public class InfoController {

    @RequestMapping(value = "info", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<String> info() {
        log.info("Info endpoint executed.");
        return new ResponseEntity<>("{\"version\": \"1.0\"}", HttpStatus.OK);
    }
}