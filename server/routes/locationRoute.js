const express = require("express");
const router = express.Router();

const locationController = require("../controllers/locationController");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/save", verifyToken, locationController.saveLocation);
router.post("/delete/:id", verifyToken, locationController.deleteLocation);
router.get("/getall", locationController.getAllLocations);

module.exports = router;
