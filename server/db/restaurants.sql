CREATE TABLE restaurants (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL ,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL
);