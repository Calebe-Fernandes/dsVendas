package com.devsuperior.dsVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsVendas.entities.Sale;

public interface SaleRepository extends JpaRepository <Sale, Long>{

}
