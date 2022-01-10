const router = require("express").Router();

const {
  getAllProducts,
  getSingleProduct,
  getShowcaseProducts,
  deleteProduct,
  addProduct,
} = require("../controllers/productController");

const { verifyAdmin } = require("../middleware/verifyToken");

router.route("/").get(getShowcaseProducts);
router.route("/allProducts").get(getAllProducts);
router.route("/:id").get(getSingleProduct);
router.route("/addProduct").post(verifyAdmin, addProduct);
router.route("/delete/:id").delete(verifyAdmin, deleteProduct);

module.exports = router;
