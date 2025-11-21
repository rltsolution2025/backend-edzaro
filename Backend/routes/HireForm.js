const express = require("express");
const router = express.Router();
const Enquire = require('../models/Hire');

// POST /api/hire
router.post('/hire', async(req,res) =>{
    try{
        const {companyName, yourName, email, roles} = req.body;
        if(!companyName || !yourName || !email || !roles){
            return res.status(400).json({ message: "All fields are required." });
        }
        const newEnquiry = new Enquire({ companyName, yourName, email, roles });
        await newEnquiry.save();
        res.status(201).json({ message: "Enquiry submitted successfully." });
    } catch (error) {
        console.error("Error submitting enquiry:", error);
        res.status(500).json({ message: "Internal server error." });
    }
})
module.exports = router;