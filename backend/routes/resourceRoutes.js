const router = require("express").Router();
const { getResources, addResource } = require("../controllers/resourceController");
const authMiddleware = require("../middleware/authMiddleware");

// Public GET route
router.get("/", getResources);

// Protected POST route
router.post("/", authMiddleware, addResource);

module.exports = router;
