package com.devsuperior.dsVendas.dto;

import java.io.Serializable;

import com.devsuperior.dsVendas.entities.Seller;

public class SaleSumDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Double soma;
	
	public SaleSumDTO() {
	}
	
	public SaleSumDTO(Seller seller, Double soma) {
		this.sellerName = seller.getName();
		this.soma = soma;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSoma() {
		return soma;
	}

	public void setSoma(Double soma) {
		this.soma = soma;
	}
	
	
	
}
