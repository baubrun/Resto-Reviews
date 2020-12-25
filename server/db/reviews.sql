CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    comments TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating >=1 AND rating <=5)
);