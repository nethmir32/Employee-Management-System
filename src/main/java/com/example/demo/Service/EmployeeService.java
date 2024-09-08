package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Employee;
import com.example.demo.Repo.EmployeeRepo;

@Service
public class EmployeeService extends GenericService<Employee, Long>{
	@Autowired
	private EmployeeRepo repo;
}
