package com.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UsersDAO extends CrudRepository<Users,Integer> {

}
