const { Schema, model } = require('mongoose');

const plantSchema = new Schema({
    id: {
        type: Number,
        default: 1,
    },
    common_name: {
        type: String,
        required: false,
    },
    scientific_name: {
        type: String,
        required: true,
    },
    watering: {
        type: String,
        required: true,
    },
    sunlight: {
        type: String,
        required: true,
    },
});

const Plant = model('Plant', plantSchema);

module.exports = Plant;