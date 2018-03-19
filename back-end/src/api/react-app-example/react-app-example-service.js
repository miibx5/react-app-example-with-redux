const ModelConfig = require("./react-app-example-model-config");

ModelConfig.methods(["get", "post", "put", "delete"]);
ModelConfig.updateOptions({ new: true, runValidators: true });

module.exports = ModelConfig;
