package com.hacklek.controller;

import com.hacklek.constants.Sex;
import com.hacklek.dtos.MedicineDto;
import com.hacklek.dtos.UserDataDtoAndPackage;
import com.hacklek.service.LekLookupService;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import static com.hacklek.constants.Constants.ELIGIBLE_FOR_ALCOHOL_AGE;

@EnableAutoConfiguration
@RestController
@RequestMapping("api/v1/")
@Log4j
public class LekAlternativesController {

    @Autowired
    private LekLookupService lekLookupService;

    @RequestMapping(value = "alternatives/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<MedicineDto> lookup(@PathVariable("id") Long id, @RequestBody UserDataDtoAndPackage userDataDto) {
        log.info("alternatives endpoint executed.");

        log.info(userDataDto);

        MedicineDto resultDto = lekLookupService.findAlternatives(id, userDataDto.getPackageName());

        if (Sex.M.equals(userDataDto.getSex())) {
            resultDto.setNotForPregnant(false);
        }
        if (Integer.valueOf(userDataDto.getAge()) < ELIGIBLE_FOR_ALCOHOL_AGE)
        {
            resultDto.setNoAlcAllowed(false);
        }
        return new ResponseEntity<>(resultDto, HttpStatus.OK);
    }

}
