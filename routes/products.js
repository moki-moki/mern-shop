const router = require("express").Router();

const {
  getAllProducts,
  getSingleProduct,
  getShowcaseProducts,
} = require("../controllers/productController");

router.route("/").get(getShowcaseProducts);
router.route("/allProducts").get(getAllProducts);
router.route("/:id").get(getSingleProduct);

module.exports = router;
