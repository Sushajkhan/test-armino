const Location = require("../models/Location");
const User = require("../models/User");

const saveLocation = async (req, res) => {
  try {
    const { city, userId } = req.body;
    const location = await Location.findOne({ city });

    if (location) {
      return res.status(409).send({ message: "Already saved" });
    }

    const newLocation = new Location({ city });
    await newLocation.save();

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    user.bookmarkedLocations.push(newLocation); // Push newLocation, not location
    await user.save();

    res.status(201).send({ message: "Location saved" });
  } catch (error) {
    console.error("Error saving location:", error);
    res.status(500).send({ error: "Failed to save location" });
  }
};

const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    await Location.findByIdAndDelete(id);
    res.status(204).send({ message: "Location Deleted" });
  } catch (error) {
    console.error("Error deleting location:", error);
    res.status(500).send({ error: "Failed to delete location" });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).send(locations);
  } catch (error) {
    console.error("Error getting locations:", error);
    res.status(500).send({ error: "Failed to retrieve locations" });
  }
};

module.exports = { saveLocation, deleteLocation, getAllLocations };
