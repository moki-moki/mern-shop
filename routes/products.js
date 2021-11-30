const router = require("express").Router();

const {
  getAllProducts,
  getAllProductsStatic,
  getSingleProduct,
  getShowcaseProducts,
} = require("../controllers/productController");

router.route("/").get(getShowcaseProducts);
router.route("/allProducts").get(getAllProducts);
router.route("/:id").get(getSingleProduct);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
