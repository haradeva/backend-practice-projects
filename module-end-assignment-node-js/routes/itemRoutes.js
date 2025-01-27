const express = require("express");
const { body, validationResult } = require("express-validator");
const {
  getItems,
  getItemsById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItemsById);

// POST with data validation
router.post(
  "/",
  [
    body("name")
      .isString()
      .withMessage("Name must be a string")
      .notEmpty()
      .withMessage("Name is required"),
    body("price")
      .isFloat()
      .withMessage("price must be a number")
      .notEmpty()
      .withMessage("Price is required"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createItem
);

router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
