const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Import the new product routes
const productRoutes = require('./routes/products');

app.use(express.json());

// --- UPDATE 1: Connect to the new e-commerce database ---
// Removed deprecated options (useNewUrlParser, useUnifiedTopology)
mongoose.connect('mongodb://localhost:27017/ecom_catalog_db')
.then(() => {
    console.log('Connected to MongoDB: ecom_catalog_db');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// --- UPDATE 2: Use the new Product routes ---
// All catalog operations will now be handled under /api/products
app.use('/api/products', productRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Test routes:
- Seed Data: POST http://localhost:${PORT}/api/products/seed
- Get All: GET http://localhost:${PORT}/api/products
- Filter Category: GET http://localhost:${PORT}/api/products/filter?category=Apparel
- Project Variants: GET http://localhost:${PORT}/api/products/variants/Red
`);
});