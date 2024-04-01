const express = require("express")
const router = express.Router();

const {addData,getData}=require("../controller/user");

router.post("/adddata",addData);
router.get("/getdata",getData);

// Export the router for use in the main application
module.exports = router;