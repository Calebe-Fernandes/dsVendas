package com.devsuperior.dsVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsVendas.entities.Seller;

public interface SellerRepository extends JpaRepository <Seller, Long>{

}
