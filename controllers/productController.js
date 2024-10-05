// Import Product model
const products = require('../models/Product');

// Get all products with optional quantity limit
exports.getAllProducts = async (req, res) => {
    try {
        let productsList = await products.find();
        res.json(productsList);
    } catch (error) {
        console.error('Error fetching productsList:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllProductsByCategory = async (req, res) => {
    try {
        // const page = parseInt(req.query.page) - 1 || 0;
        // const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "price";
        let category = req.query.category || "All";

        const categoryOptions = [
            "Trouser",
            "Jersey",
            "Panjabi",
            "T-Shirt",
            "PoloShirt",
            "Attar",
            "Tupi",
            "Janamaz",
        ];

        category === "All"
            ? (category = [...categoryOptions])
            : (category = req.query.category.split(","));
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }

        const productData = await products.find({ title: { $regex: search, $options: "i" } })
        .where("category")
        .in([...category])
        .sort(sortBy);
    

        const total = await products.countDocuments({
            category: { $in: [...category] },
            title: { $regex: search, $options: "i" },
        });

        const response = {
            error: false,
            categorys: categoryOptions,
            productData,
        };

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
};


// Get product by ID
exports.getProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await products.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
    const id = req.params.itemId;
    try {
        const result = await products.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(result);
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update product by category
exports.updateProduct = async (req, res) => {
    const { title, brand, category, price, discount, productSizes, tag, productColors, discountType, sku, quantity, description, rating, thumbnail, morePhotos} = req.body;
    const { productId } = req.params;

    try {
        const product = await products.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'User not found' });
        }

        product.title = title || product.title;
        product.brand = brand || product.brand;
        product.category = category || product.category;
        product.price = price || product.price;
        product.discount = discount || product.discount;
        product.discountType = discountType || product.discountType;
        product.sku = sku || product.sku;
        product.tag = tag || product.tag;
        product.quantity = quantity || product.quantity;
        product.productSizes = productSizes || product.productSizes;
        product.productColors = productColors || product.productColors;
        product.description = description || product.description;
        product.rating = rating || product.rating;
        product.thumbnail = thumbnail || product.thumbnail;
        product.morePhotos = morePhotos || product.morePhotos;

        await product.save();
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};



// Create new product
exports.createProduct = async (req, res) => {
    // Extract product data from request body
    const {
    category,
    type,
    name,
    gender,
    isNewProduct,
    sale,
    rate,
    price,
    originPrice,
    brand,
    sold,
    quantity,
    quantityPurchase,
    sizes,
    tag,
    variation,
    thumbImage,
    images,
    description,
    action,
    slug,
    sku
    } = req.body;

    // Create a new product instance
    const newProduct = new products({
    category,
    type,
    name,
    gender,
    new: isNewProduct,
    sale,
    rate,
    price,
    originPrice,
    brand,
    sold,
    quantity,
    quantityPurchase,
    sizes,
    tag,
    variation,
    thumbImage,
    images,
    description,
    action,
    slug,
    sku
    });

    try {
        // Save the new product to the database
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
