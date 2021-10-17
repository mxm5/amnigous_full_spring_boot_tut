package io.mxm.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("students")
public class StudentController {
    @GetMapping
    public List<Student> students() {
        return List.of(
                new Student(
                        "hasan",
                        "mohammadi",
                        "hasanmohammadi@gmail.com",
                        Student.Gender.MALE,
                        UUID.randomUUID())
        ,
                new Student(
                        "fatma",
                        "amiri",
                        "fatmaamiri@gmail.com",
                        Student.Gender.FEMALE,
                        UUID.randomUUID())
        );
    }
}
