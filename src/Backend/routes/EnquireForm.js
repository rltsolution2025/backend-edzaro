const express = require("express");
const router = express.Router();
const Enquire = require("../models/Enquire");

// POST /api/enquire
router.post('/enquire', async(req, res) => {
    try {
        const { name, email, phone, agree } = req.body; 
        if (!name || !email || !phone) {
            return res.status(400).json({ error: "All fields are required" });
        }   
        const newEnquire = new Enquire({ name, email, phone, agree });
        await newEnquire.save();
        res.status(201).json({ message: "Enroll Form submitted successfully", data: newEnquire });
        console.log("Enquiry saved:", newEnquire);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }   
});

module.exports = router;