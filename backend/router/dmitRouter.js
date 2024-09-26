const express = require("express");
const DmitPage = require("../models/dmitmodel");

const router = express.Router()

// Get all data (DMIT Test and Features)
router.get("/dmit", async (req, res) => {
    try {
      const dmitPage = await DmitPage.find();
      res.json(dmitPage);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Create new data
  router.post("/dmit", async (req, res) => {
    const { dmitTest,careerTest,benefits,features,info,brainFinger } = req.body;
  
    const newDmitPage = new DmitPage({
      dmitTest,
      careerTest,
      benefits,
      features,
      info,
      brainFinger
    });
  
    try {
      const savedDmitPage = await newDmitPage.save();
      res.status(201).json(savedDmitPage);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Update data
  router.put("/dmit/:id", async (req, res) => {
    try {
      const updatedDmitPage = await DmitPage.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedDmitPage);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete data
  router.delete("/dmit/:id", async (req, res) => {
    try {
      await DmitPage.findByIdAndDelete(req.params.id);
      res.json({ message: "Deleted Successfully!" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;