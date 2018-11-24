package com.hacklek.controller;

import com.hacklek.dtos.MedicineDto;
import com.hacklek.dtos.UserDataDto;
import com.hacklek.service.LekLookupService;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@EnableAutoConfiguration
@RestController
@RequestMapping("api/v1/")
@Log4j
public class LekLookupController {

    @Autowired
    private LekLookupService lekLookupService;

    @RequestMapping(value = "lookup/{name}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<MedicineDto> lookup(@PathVariable("name") String name, @RequestBody UserDataDto userDataDto) {
        log.info("lookup endpoint executed.");

        log.info(userDataDto);

        MedicineDto resultDto = lekLookupService.lookupMedicine(name);
        return new ResponseEntity<>(resultDto, HttpStatus.OK);
    }



}

