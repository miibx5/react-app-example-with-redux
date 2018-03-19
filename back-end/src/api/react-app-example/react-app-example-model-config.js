const restful = require("node-restful");
const mongoose = restful.mongoose;

const appSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    dateCreation: { type: Date, default: Date.now }
});
module.exports = restful.model("ModelConfig", appSchema);