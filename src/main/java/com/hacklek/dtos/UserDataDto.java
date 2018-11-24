package com.hacklek.dtos;

public class UserDataDto {

    private String age;
    private boolean sex;
    private boolean alcohol;
    private boolean pregnancy;

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public boolean isSex() {
        return sex;
    }

    public void setSex(boolean sex) {
        this.sex = sex;
    }

    public boolean isAlcohol() {
        return alcohol;
    }

    public void setAlcohol(boolean alcohol) {
        this.alcohol = alcohol;
    }

    public boolean isPregnancy() {
        return pregnancy;
    }

    public void setPregnancy(boolean pregnancy) {
        this.pregnancy = pregnancy;
    }


    @Override
    public String toString() {
        return "UserDataDto{" +
                "age='" + age + '\'' +
                ", sex=" + sex +
                ", alcohol=" + alcohol +
                ", pregnancy=" + pregnancy +
                '}';
    }
}
