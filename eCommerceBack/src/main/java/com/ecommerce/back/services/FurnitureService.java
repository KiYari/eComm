package com.ecommerce.back.services;

import com.ecommerce.back.model.Furniture;
import com.ecommerce.back.repositories.FurnitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FurnitureService {
    private final FurnitureRepository furnitureRepository;

    @Autowired
    public FurnitureService(FurnitureRepository furnitureRepository) {
        this.furnitureRepository = furnitureRepository;
    }

    public Furniture findById(int id) {
        return furnitureRepository.findById(id).orElse(null);
    }

    public List<Furniture> findAll() {
        return furnitureRepository.findAll();
    }
}
