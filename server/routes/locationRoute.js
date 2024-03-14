const express = require("express");
const router = express.Router();

const locationController = require("../controllers/locationController");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/save", verifyToken, locationController.saveLocation);
router.post("/delete", verifyToken, locationController.deleteLocation);
router.post("/getall", verifyToken, locationController.getAllLocations);

module.exports = router;
