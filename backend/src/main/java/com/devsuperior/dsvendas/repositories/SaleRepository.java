package com.devsuperior.dsvendas.repositories;

import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query(value = "SELECT sellers.name as sellerName, SUM(sales.amount) as sum " +
            "FROM tb_sales sales, tb_sellers sellers " +
            "WHERE sales.seller_id = sellers.id " +
            "GROUP BY sellers.id", nativeQuery = true)
    List<SaleSumDTO> amountGroupedBySeller();

    @Query(value = "SELECT sellers.name as sellerName, SUM(sales.visited) as visited, SUM(sales.deals) as deals " +
            "FROM tb_sales sales, tb_sellers sellers " +
            "WHERE sales.seller_id = sellers.id " +
            "GROUP BY sellers.id", nativeQuery = true)
    List<SaleSuccessDTO> successGroupedBySeller();
}
