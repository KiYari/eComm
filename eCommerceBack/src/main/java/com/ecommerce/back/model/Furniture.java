package com.ecommerce.back.model;

import com.ecommerce.back.util.Categories;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "items")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Furniture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "title")
    private String title;
    @Column(name = "img")
    private String imagePath;
    @Column(name = "description")
    private String description;
    @Column(name = "category")
    private String category;
    @Column(name = "price")
    private long price;
}
