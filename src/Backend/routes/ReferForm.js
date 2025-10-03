const express = require("express");
const router = express.Router();
const Enquire = require("../models/Refer");

router.post('/', async(req,res) =>{
    try{
        const {refereeName, refereeEmail, refereePhone, programInterested, referredBy, status} = req.body;

        if(!refereeName || !refereeEmail || !refereePhone || !programInterested || !referredBy){
            return res.status(400).json({ message: "All fields are required." });
        }
        console.log(req.body);
        const newEnquiry = new Enquire({refereeName, refereeEmail, refereePhone, programInterested, referredBy, status});
        await newEnquiry.save();
        res.status(201).json({message: "Reference Form submitted successfully."});
        console.log("Reference Form saved:", newEnquiry);
    } catch (error) {
        console.error("Error submitting enquiry:", error);
        res.status(500).json({ message: "Internal server error." });
    }
})
module.exports = router;