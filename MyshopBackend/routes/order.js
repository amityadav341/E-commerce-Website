const express = require("express");
const router = express.Router();



const {
  getOrderById,
  createOrder,
  getAllOrders,
  getOrderStatus,
  updateStatus,
  getOrder
} = require("../controllers/order");

//params
router.param("userID", getOrderById);


//Actual routes
//create
router.post("/order/create",createOrder);
router.get("/order/:userID", getOrder);


module.exports = router;
