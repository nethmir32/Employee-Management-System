package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Repo.GenericRepo;


public class GenericService<T,K> {
	@Autowired
	private GenericRepo<T,K> repo;
	
	public List<T> getAll(){
		return repo.findAll();
	}
	
	public T getById(K id) {
		return repo.findById(id).get();
	}
	/*
	public T getById(K id, T t) {
		if(repo.findById(id).isEmpty()) {
			throw new EntityNotFoundException("The "+t.getClass().getSimpleName()+ "with id: " +id+" is not available");
		}
		return repo.findById(id).get();
	}*/
	
	public String addEle(T ele) {
		repo.save(ele);
		return "Added successfully";	
	}
	public String updateEle(K id, T ele) {
		if(repo.findById(id).isEmpty()) {
			return "Element not found";
		}
		repo.save(ele);
		return "Updated successfully";
	}
	public String deleteEle(K id) {
		if(repo.findById(id).isEmpty()) {
			return "Element not found";
		}
		repo.delete(repo.findById(id).get());
		return "Deleted successfully";
	}
}
