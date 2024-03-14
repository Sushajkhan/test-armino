const Location = require("../models/Location");

const saveLocation = async (req, res) => {
  try {
    const { lat, lon } = req.body;
    const newLocation = new Location({ lat, lon });
    await newLocation.save();
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
    const locations = await User.find();
    res.status(200).send(locations);
  } catch (error) {
    console.error("Error getting locations:", error);
    res.status(500).send({ error: "Failed to retrieve locations" });
  }
};

module.exports = { saveLocation, deleteLocation, getAllLocations };
