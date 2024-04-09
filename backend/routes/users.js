var express = require("express");
var router = express.Router();
const db = require("../config/database");

/* GET team data. */
router.get("/", async function (req, res, next) {
  try {
    const [teamData, _] = await db.execute("SELECT * FROM team");

    // Sending team data in JSON format
    res.json(teamData);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
