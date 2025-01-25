const Item = require("../models/itemModel");

//GET/items
const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

//GET/items/:id
const getItemsById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) {
    return res.status(404).send("Item not found");
  }
  res.json(item);
};

//POST/items
const createItem = async (req, res) => {
  const { name, price } = req.body;
  const item = new Item({ name, price });
  await item.save();
  res.status(201).json(item);
};

//PUT/items/:id
const updateItem = async (req, res) => {
  const { name, price } = req.body;
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    { name, price },
    { new: true }
  );
  if (!item) {
    return res.status(404).send("Item not found");
  }
  res.json(item);
};

//DELETE/items/:id
const deleteItem = async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) {
    return res.status(404).send("Item not found");
  }
  res.status(204).send();
};

module.exports = { getItems, getItemsById, createItem, updateItem, deleteItem };
