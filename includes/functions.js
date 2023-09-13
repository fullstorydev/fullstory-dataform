function baseSchema() {
    return "fullstory_base_" + dataform.projectConfig.vars.env;
}

function productSchema() {
    return "fullstory_v1_" + dataform.projectConfig.vars.env;
}

module.exports = {baseSchema, productSchema};
