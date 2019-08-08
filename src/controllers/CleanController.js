const Dev = require('../models/Dev');

module.exports = {
    async delete(req, res) {
        const newvalues = { $set: { likes: [], dislikes: [] } };

        await Dev.updateMany({}, newvalues);

        return res.json({ status: 200 });
    }
};
