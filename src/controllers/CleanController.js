const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async delete(req, res) {
    var newvalues = { $set: { likes: [], dislikes: [] } };

    await Dev.updateMany({}, newvalues);

    console.table(Dev);
    return res.json({ status: 200 });
  }
};
