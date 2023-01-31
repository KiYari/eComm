package com.ecommerce.back.controllers;

import com.ecommerce.back.model.Furniture;
import com.ecommerce.back.services.FurnitureService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;
import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
public class FurnitureApiController {
    private final FurnitureService furnitureService;

    public FurnitureApiController(FurnitureService furnitureService) {
        this.furnitureService = furnitureService;
    }

    @GetMapping("/all")
    public List<Furniture> listAll() {
        return furnitureService.findAll();
    }
}
