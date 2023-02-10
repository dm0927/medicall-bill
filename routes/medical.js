const express = require("express");
const router = express.Router();


const medical = require("../controllers/medical")


router
      .route('/items')
      .get(medical.fetch_medical_items)
      .post(medical.insert_medical_items)

module.exports = router;