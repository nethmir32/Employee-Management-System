package com.example.demo.Repo;

import org.springframework.stereotype.Repository;

import com.example.demo.Model.Employee;

@Repository
public interface EmployeeRepo extends GenericRepo<Employee, Long> {
	
}
