const express = require("express");
const usersModel = require("./users-model");

const router = express.Router();

function restricted() {
  return async (req, res, next) => {
    try {
      // authorize the user here
      const { username, password } = req.headers;
      if (!userbane || !password) {
        return res.status(401).json({
          message: "Invalid Credentials"
        });
      }
      const user = await usersModel.findBy({ username }).first();
      if (!user) {
      }
    } catch (err) {
      next(err);
    }
  };
}

router.get("/", async (req, res, next) => {
  try {
    const users = await usersModel.find();

    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
