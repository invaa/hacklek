package com.hacklek.dtos;

import com.hacklek.constants.Sex;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@ToString
public class UserDataDtoAndPackage {

    @NotNull
    private String age;
    private Sex sex;
    private boolean alcohol;
    private boolean pregnancy;
    private String packageName;

}
