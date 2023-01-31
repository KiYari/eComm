package com.ecommerce.back.util;

import lombok.AllArgsConstructor;
import lombok.Data;

public enum Categories {
    CHAIR("chair"),
    TABLE("table"),
    SOFA("sofa"),
    LOCKER("locker"),
    BED("bed"),
    LAMP("lamp");
    private String categoryName;
    Categories(String caterogyName) {
        this.categoryName = caterogyName;
    }
}
