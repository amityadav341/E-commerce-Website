const express = require('express')

const router = express.Router();

const {getCategoryById,createCategory,getCategory,getAllCategory,
updateCategory, removeCategory} = require("../controllers/category");

router.param("categoryId", getCategoryById);  // constructor

router.post("/category/create/",createCategory);

router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

//update
router.put("/category/:categoryId",updateCategory);

//delete

router.delete("/category/:categoryId",removeCategory);


module.exports = router;