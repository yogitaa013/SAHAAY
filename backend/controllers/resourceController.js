const Resource = require("../models/Resource");

// GET /api/resources?category=Legal&state=Delhi
exports.getResources = async (req, res) => {
  const { category, state } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (state) filter.state = state;

  const resources = await Resource.find(filter);
  res.json(resources);
};

// POST /api/resources
exports.addResource = async (req, res) => {
  const resource = await Resource.create(req.body);
  res.json(resource);
};
