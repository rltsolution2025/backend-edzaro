// routes/enquiryRoutes.js
const express = require("express");
const { submitEnquiry } = require("../controller/enquiryController");

const router = express.Router();

router.post("/", submitEnquiry);

module.exports = router;
