const Product = require("../models/product");

// Get all products
const getAllProducts = async (req, res) => {
  // deconstract only querys that we want, else if no querys match post all products
  const { featured, category, sort, fields, numericFilters } = req.query;
  const queryObj = {};

  if (featured) {
    queryObj.featured = featured === "true" ? true : false;
  }

  if (category) {
    queryObj.category = category;
  }

  // filter by price and rating
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      // destructure arrary of items
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObj[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Product.find(queryObj);

  // sorting one or multiple values else set default sort to be createdAt timestamp
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  // fields
  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result = result.select(fieldList);
  }

  const products = await result;

  try {
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msg: "there was a server error" });
  }
};

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort("price");
  res.status(200).json({ msg: products });
};

// Get single product by Id
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({ msg: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Invalid product id :( " });
  }
};

// get showcase products
const getShowcaseProducts = async (req, res) => {
  try {
    const product = await Product.find({}).limit(10);
    res.status(200).json({ msg: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "something went wrong on serverside " });
  }
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
  getSingleProduct,
  getShowcaseProducts,
};
