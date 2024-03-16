const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    if (!req.body.username || !req.body.password) {
      res.json({
        msg: "No username or password entered.",
      });
    }
    await Admin.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({
      message: "Admin created successfully",
    });
  } catch (err) {
    res.json({
      msg: "Error",
    });
  }
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
//   Description: Logs in an admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { token: 'your-token' }

    

});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
