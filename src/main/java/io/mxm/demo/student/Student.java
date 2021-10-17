package io.mxm.demo.student;

import lombok.Getter;

import java.util.UUID;

@Getter
public class Student {
    private final String firstName;
    private final String lastName;
    private final String email;
    private final Gender gender;
    private final UUID studentId;

    public Student(String firstName,
                   String lastName,
                   String email,
                   Gender gender,
                   UUID studentId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.studentId = studentId;
    }

    enum Gender {
        MALE, FEMALE
    }
}
